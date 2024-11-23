import  PrismaClient  from '../prisma';

class GetAllTasksService{
    async execute(){
        const tasks = await PrismaClient.tasks.findMany();

        return tasks;
    };
};

export {GetAllTasksService};