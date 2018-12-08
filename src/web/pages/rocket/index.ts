import { useState, h, useStyles } from "@meteor-it/rocket";
import * as parse5 from 'parse5';
import rocket from '../../rocket';
import * as rocketStyle from './index.less';

const addPadding = string => string.split('\n').map(e => `\t${e}`).join('\n');
const toCamelCase = s => s.replace(/-+./g, (e) => e[e.length - 1].toUpperCase());
const stringifyDom = (node) => {
    if (node.nodeName === '#document-fragment') {
        return `h([\n${addPadding(node.childNodes.map(stringifyDom).filter(e => e !== "''" && e !== '\'\\n\'').join(',\n'))}\n])`;
    } else if (node.nodeName === '#text') {
        return `'${node.value.replace(/\n/g, '\\n').replace(/'/g, '\\\'').trim()}'`
    } else if (node.nodeName === '#comment') {
        return `/*${node.data.trim()}*/ //`;
    } else {
        let attrs = node.attrs.map(e => {
            if (e.name === 'class')
                return `class: [${e.value.split(' ').map(e => `style.${toCamelCase(e)}`).join(', ')}]`;
            return `${toCamelCase(e.name)}: '${e.value.replace(/'/g, '\\\'')}'`
        }).join(', ');
        if (attrs !== '') {
            if (node.childNodes === undefined || node.childNodes.length === 0)
                return `h('${node.nodeName}', {${attrs}})`
            return `h('${node.nodeName}', {${attrs}}, [\n${addPadding(node.childNodes.map(stringifyDom).filter(e => e !== "''" && e !== '\'\\n\'').join(',\n'))}\n])`;
        } else {
            if (node.childNodes === undefined || node.childNodes.length === 0)
                return `h('${node.nodeName}')`
            return `h('${node.nodeName}', [\n${addPadding(node.childNodes.map(stringifyDom).filter(e => e !== "''" && e !== '\'\\n\'').join(',\n'))}\n])`;
        }
    }
}
const htmlToRocket = html => stringifyDom(parse5.parseFragment(html)).replace(/\*\/ \/\/,?/g, '*/');



const root = () => {
    useStyles(rocketStyle);
    const [text, setText] = useState('<test/>');
    if (text === '<test/>' && process.env.BROWSER) { setTimeout(() => setText(document.body.innerHTML), 1); }
    const translated = htmlToRocket(text);
    return h('div', { class: [rocketStyle.convertRoot] }, [
        h('textarea', {
            class: [rocketStyle.input],
            onChange(el) { setText(el.target.value) },
            value: text
        } as any, []),
        h('textarea', {
            class: [rocketStyle.output],
            value: translated,
            readOnly: true
        })
    ]);
}

rocket.router.on(null, '/rocket/converter', ctx => {
    ctx.state.drawTarget = h(root);
})