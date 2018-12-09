import { useStyles, h } from "@meteor-it/rocket";
import * as headerStyle from './index.less';
import limitingColumn from "../limitingColumn";

export default () => {
    useStyles(headerStyle);
    return h('div', { class: [headerStyle.header] }, [
        h('a', { href: '/', class: [headerStyle.brand] }, ['0lach']),
        h('span', { class: [headerStyle.separator] }, ['/']),
        h('a', { href: '/projects' }, ['Projects'])
    ]);
}