import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../services/create-tasks-service";

class CreateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {description, sector, priority, register_date, status } = 
            request.body as { description: string, sector: string, priority: string, register_date: Date, status: string};
        const { idUser } = request.params as { idUser: string }

        const taskService = new CreateTaskService();
        const task = await taskService.execute
            ({ 
                idUser, 
                description, 
                sector, 
                priority, 
                register_date: new Date(), 
                status: "A fazer",
            });

        reply.send(task)
    }
};

export { CreateTaskController }