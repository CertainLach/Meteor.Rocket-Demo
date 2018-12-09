import { useStyles, h } from "@meteor-it/rocket";
import * as styles from './index.less';
import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
    useStyles(styles);
    return h('div', { class: [styles.wrappingContainer] }, [
        children
    ]);
}