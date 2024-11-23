import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllUsersService } from "../services/get-all-users-service";

class GetAllUsersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getAllUsersService = new GetAllUsersService();

        const users = await getAllUsersService.execute();

        reply.send(users)
    };
};

export { GetAllUsersController }