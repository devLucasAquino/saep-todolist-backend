import { FastifyReply, FastifyRequest } from "fastify";
import { GetUniqueUserService } from "../services/get-unique-user";

class GetUniqueUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { idUser } = request.params as { idUser: string }

        const getUniqueUserService = new GetUniqueUserService();
        const user = getUniqueUserService.execute({
            idUser
        });

        return user;
    };
};

export { GetUniqueUserController }