import xpress from './xpress';
import Logger from '@meteor-it/logger';
import NodeReceiver from '@meteor-it/logger/receivers/node';
import { ServerMiddleware } from '@meteor-it/rocket';
import rocket from '../web';

Logger.addReceiver(new NodeReceiver());

xpress.use(null, new ServerMiddleware(rocket, {
    compiledClientDir: `${__dirname}/../client`,
    compiledServerDir: __dirname
}));

xpress.listenHttp('0.0.0.0', 8080);