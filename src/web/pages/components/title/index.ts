import { h, useStyles } from "@meteor-it/rocket";
import * as tagStyle from './tag.less';
import * as style from './index.less';
import { ReactNode } from "react";

const tag = ({text}:{text:string})=>{
    useStyles(tagStyle);
    return h('div',{class:[tagStyle.text]},[text]);
}

const tagList = ({children}:{children:string[]})=>{
    useStyles(tagStyle);
    return h('div',{class:[tagStyle.tag]},children.map(t=>h(tag,{text:t})));
}

export default (props:{
    id:string,
    short:string,
    title: ReactNode,
    subtitle: ReactNode,
    big?: boolean,
    data: ReactNode,
    tags: string[]
    children?: ReactNode
})=>{
    useStyles(style);
    return h('div',{class:[style.main,props.big&&style.big]},[
        h('div',{class:[style.title]},[
            h('div',{class:[style.square]},[
                h('div',{class:[style.squareTop]},[props.id]),
                h('div',{class:[style.squareBottom]},[props.short])
            ]),
            h('div',{class:[style.text]},[
                h('h1',[props.title]),
                h('h2',[props.subtitle]),
                props.tags&&props.tags.length!==0&&h(tagList,props.tags)
            ])
        ]),
        props.children&&h('div',{class:[style.data]},[
            h('div',{class:[style.line]}),
            h('div',{class:[style.text]},[props.children])
        ])
    ])
}