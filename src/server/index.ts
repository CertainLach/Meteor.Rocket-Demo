import xpress from './xpress';
import Logger from '@meteor-it/logger';
import NodeReceiver from '@meteor-it/logger/receivers/node';

Logger.addReceiver(new NodeReceiver());

xpress.listenHttp('0.0.0.0',8080);