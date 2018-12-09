import { h, useStyles } from "@meteor-it/rocket";
import rocket from "../../rocket";
import * as styles from './index.less';
import wrappingContainer from "../components/wrappingContainer";
import limitingColumn from "../components/limitingColumn";
import { string } from "prop-types";
import button from "../components/button";

const subtitle = ({name,subname}:{name:string,subname:string})=>{
    return h([
        name,
        h('b',[subname])
    ]);
}

const projects = () => {
    useStyles(styles);
    return h(wrappingContainer, [
        h(limitingColumn, [
            h('h2',['Проекты']),
            ...['Немногие из моих личных проектов доходят до завершения, т.к по большей части я разрабатываю ради своего развлечения и наобра опыта, а не для получения законченного продукта.','Законченные проекты лучше смотреть в моём портфолио, а о развитии этих - в блоге'].map(e=>h('p',[e])),
            h('div',{class:[styles.buttons]},[
                h(button,['В портфолио']),
                h(button,['В блог'])
            ]),
            h('hr'),
            h(subtitle,{name:'СЛУЧАЙНЫЕ',subname:'ИССЛЕДОВАНИЯ И ПРОТОТИПЫ'})
        ])
    ]);
}

rocket.router.on(null, '/projects', ctx => {
    ctx.state.drawTarget = h(projects);
})

