import  PrismaClient  from '../prisma';

class GetAllUsersService{
    async execute(){
        const users = await PrismaClient.users.findMany();

        return users;
    };
};

export {GetAllUsersService};