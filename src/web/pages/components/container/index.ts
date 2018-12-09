import { useStyles, h } from "@meteor-it/rocket";
import * as containerStyle from './index.less';
import { ReactNode } from "react";
import limitingColumn from "../limitingColumn";

export default ({ children }: { children: ReactNode }) => {
    useStyles(containerStyle);
    return h('div', { class: [containerStyle.container] }, [
        children
    ]);
}