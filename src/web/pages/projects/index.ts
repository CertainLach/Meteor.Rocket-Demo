import { h, useStyles, useAsync } from "@meteor-it/rocket";
import rocket from "../../rocket";
import * as styles from './index.less';
import wrappingContainer from "../components/wrappingContainer";
import limitingColumn from "../components/limitingColumn";
import { string } from "prop-types";
import button from "../components/button";
import 'isomorphic-fetch';
import LoadingState from "@meteor-it/rocket/preload/LoadingState";
import IProject from "../../../common/IProject";

const subtitle = ({ name, subname }: { name: string, subname?: string }) => {
    return h([
        h('hr'),
        name,
        subname && h('b', [subname])
    ]);
}

const projects = () => {
    useStyles(styles);
    const [state, loaded] = useAsync('projectList', async (): Promise<IProject[]> => {
        const data = await fetch('http://localhost:8080/api/projects');
        return await data.json();
    });
    return h(wrappingContainer, [
        h(limitingColumn, [
            h('h2', ['Проекты']),
            ...['Немногие из моих личных проектов доходят до завершения, т.к по большей части я разрабатываю ради своего развлечения и наобра опыта, а не для получения законченного продукта.', 'Законченные проекты лучше смотреть в моём портфолио, а о развитии этих - в блоге'].map(e => h('p', [e])),
            h('div', { class: [styles.buttons] }, [
                h(button, ['В портфолио']),
                h(button, ['В блог'])
            ]),
            h(subtitle, { name: 'СЛУЧАЙНЫЕ', subname: 'ИССЛЕДОВАНИЯ И ПРОТОТИПЫ' }),
            state===LoadingState.LOADING&&h(['Загрузка...']),
            state===LoadingState.ERRORED&&h(['Ошибка!']),
            state===LoadingState.LOADED&&loaded.map((e:IProject)=>h([
                e.name,
                e.description
            ])),
            h(subtitle, { name: 'АРХИВ' })
        ])
    ]);
}

rocket.router.on(null, '/projects', ctx => {
    ctx.state.drawTarget = h(projects);
})

