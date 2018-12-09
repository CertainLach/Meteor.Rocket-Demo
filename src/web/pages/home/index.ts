import { h, useStyles } from "@meteor-it/rocket";
import rocket from "../../rocket";
import * as styles from './index.less';
import wrappingContainer from "../components/wrappingContainer";

const home = () => {
    useStyles(styles);
    return h(wrappingContainer, [h('div', { class: [styles.home] }, [
        'Hello, i\'am lach',
        'Seems like you have been reached the end of internet',
        'This is my personal website',
        'You\'re welcome'
    ].map(e => h('div', [e])))]);
}

rocket.router.on(null, '/', ctx => {
    ctx.state.drawTarget = h(home);
})

