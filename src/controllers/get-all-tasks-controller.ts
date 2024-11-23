import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllTasksService } from "../services/get-all-tasks-service";

class GetAllTasksController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getAllTasksService = new GetAllTasksService();

        const tasks = await getAllTasksService.execute();

        reply.send(tasks)
    };
};

export { GetAllTasksController }