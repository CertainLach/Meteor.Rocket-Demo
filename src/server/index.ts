import xpress from './xpress';
import Logger from '@meteor-it/logger';
import NodeReceiver from '@meteor-it/logger/receivers/node';
import { ServerMiddleware } from '@meteor-it/rocket';
import rocket from '../web';
import IProject from '../common/IProject';

Logger.addReceiver(new NodeReceiver());

xpress.on('GET','/api/projects',async ctx=>{
    await new Promise(res=>setTimeout(res,5000));
    ctx.stream.send(JSON.stringify([{
        name: 'Ayzek',
        description:'Многофункциональный кроссплатформенный чат бот',
        url:'/',
        imageUrl:''
    }] as IProject[]))
})

xpress.use(null, new ServerMiddleware(rocket, {
    compiledClientDir: `${__dirname}/../client`,
    compiledServerDir: __dirname
}));

xpress.listenHttp('0.0.0.0', 8080);