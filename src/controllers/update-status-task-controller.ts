import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateStatusTaskService } from "../services/update-status-task-service";

class UpdateStatusTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: string };
        const { status } = request.body as { status: string };

        const updateStatusTaskService = new UpdateStatusTaskService();
        const task = await updateStatusTaskService.execute({
            id, status,
        });

        reply.send(task)
    };
};

export { UpdateStatusTaskController }