import Logger from '@meteor-it/logger';
import BrowserReceiver from '@meteor-it/logger/receivers/browser';

Logger.addReceiver(new BrowserReceiver());