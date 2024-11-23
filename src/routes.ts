import { 
    FastifyInstance, 
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';
import { CreateUserController } from './controllers/create-users-controller';
import { CreateTaskController } from './controllers/create-tasks-controller';
import { GetAllTasksController } from './controllers/get-all-tasks-controller';
import { GetAllUsersController } from './controllers/get-all-users-constroller';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    });

    fastify.post(`/task/:idUser`, async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTaskController().handle(request, reply);
    });

    fastify.get(`/tasks`, async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllTasksController().handle(request, reply)
    });
    
    fastify.get(`/users`, async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllUsersController().handle(request, reply)
    });

};