import { h, useStyles } from "@meteor-it/rocket";
import * as styles from './index.less';
import brand from "../components/brand";

export default () => {
    useStyles(styles);
    return h('div', { class: [styles.root] }, [
        brand,
        'Page not found!'
    ]);
}