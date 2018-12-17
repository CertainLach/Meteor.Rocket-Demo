import { h, useStyles } from "@meteor-it/rocket";
import rocket from "../../rocket";
import * as styles from './index.less';
import wrappingContainer from "../components/wrappingContainer";
import title from "../components/title";
import limitingColumn from "../components/limitingColumn";

const home = () => {
    useStyles(styles);
    return h(wrappingContainer, [h(limitingColumn, [h('div', { class: [styles.home] }, [
        h(title, {
            id: '0',
            short: 'lw',
            data: 'test',
            title: 'CertainLach\'s personal website',
            subtitle: 'А почему бы и нет?',
            tags: ['demo','web']
        },['Похоже что ты достиг конца интернета',h('br'),'Иначе как ты смог очутиться тут?'])
    ])])]);
}
/*
[
        'Hello, i\'am lach',
        'Seems like you have been reached the end of internet',
        'This is my personal website',
        'You\'re welcome'
    ].map(e => h('div', [e])))]
*/
rocket.router.on(null, '/', ctx => {
    ctx.state.drawTarget = h(home);
})

