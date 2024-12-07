import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTaskService } from "../services/delete-task-service";

class DeleteTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: string };

        const deleteTaskService = new DeleteTaskService();
        const task = await deleteTaskService.execute({
            id
        });
    };
};

export { DeleteTaskController }