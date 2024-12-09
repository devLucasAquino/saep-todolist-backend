import { FastifyReply, FastifyRequest } from "fastify";
import { GetUniqueUserService } from "../services/get-unique-user-service";

class GetUniqueUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { user_id } = request.params as { user_id: string }

        const getUniqueUserService = new GetUniqueUserService();
        const user = getUniqueUserService.execute({
            user_id
        });

        return user;
    };
};

export { GetUniqueUserController }