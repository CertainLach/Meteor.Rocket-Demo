import { useStyles, h } from "@meteor-it/rocket";
import * as styles from './index.less';

export default ({children, ...props})=>{
    useStyles(styles);
    return h('div', {...props,class:[styles.button]},[children]);
}