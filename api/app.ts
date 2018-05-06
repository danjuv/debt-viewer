import * as koa from 'koa';
import * as koaRouter from 'koa-router';

const app = new koa();
const router = new koaRouter();

router.get('/', async ctx => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!',
  };
});
app.use(router.routes());
export default app;
