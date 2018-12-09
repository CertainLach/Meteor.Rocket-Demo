import { ReactNode } from "react";
import { useStyles, h } from "@meteor-it/rocket";
import * as limitingColumnStyles from './index.less';

export default ({ children }: { children: ReactNode }) => {
    useStyles(limitingColumnStyles);
    return h('div', { class: [limitingColumnStyles.limitingColumn] }, [children]);
}