import rocket from '../../rocket';
import * as rootStyle from './index.less';
import { h, useStyles } from '@meteor-it/rocket';
import header from '../components/header';
import container from '../components/container';
import pageNotFound from '../pageNotFound';

const root = ({ children }) => {
    useStyles(rootStyle);
    return h([
        h(header),
        h(container, [children])
    ]);
}

rocket.router.on(null, null, async ctx => {
    try {
        await ctx.next();
    } catch (e) {
        ctx.state.drawTarget = h([
            `Error: ${e.message}`
        ]);
    }
    ctx.state.drawTarget = h(root, [ctx.state.drawTarget || h(pageNotFound)]);
});