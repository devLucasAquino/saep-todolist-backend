import prismaClient from "../prisma";

interface DeleteTaskServiceProps{
    id: string;
};

class DeleteTaskService{
    async execute({id}: DeleteTaskServiceProps){

        if(!id) return

        const task = prismaClient.tasks.delete({
            where: {
                id: id
            }
        })

        return { task }
    };
};

export { DeleteTaskService }