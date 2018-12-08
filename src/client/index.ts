import Logger from '@meteor-it/logger';
import BrowserReceiver from '@meteor-it/logger/receivers/browser';
import { initClient } from '@meteor-it/rocket';
import rocket from '../web';

Logger.addReceiver(new BrowserReceiver());

initClient(rocket);