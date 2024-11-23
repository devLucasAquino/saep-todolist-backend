import cors from '@fastify/cors';
import Fastify, { fastify } from 'fastify';
import { routes } from './routes';

const app = fastify();

app.register(cors, {
    origin: '*',
})
app.register(routes);

app.listen({port: 3333}).then(() => {
    console.log("server running on PORT: 3333")
})