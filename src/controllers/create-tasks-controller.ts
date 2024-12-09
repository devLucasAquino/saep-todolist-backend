import { FastifyRequest, FastifyReply } from "fastify";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { CreateTaskService } from "../services/create-tasks-service";

class CreateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {description, sector, priority } = 
            request.body as { description: string, sector: string, priority: string};
        const { user_id } = request.params as { user_id: string }

        const date = new Date();
        const formattedDate = format(date, "Pp", { locale: ptBR });

        const taskService = new CreateTaskService();
        const task = await taskService.execute
            ({ 
                user_id, 
                description, 
                sector, 
                priority, 
                register_date: formattedDate, 
                status: "A fazer",
            });

        reply.send(task)
    }
};

export { CreateTaskController }