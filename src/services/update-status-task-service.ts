import prismaClient from "../prisma";

interface UpdateStatusTaskServiceProps{
    id: string;
    status: string;
};

class UpdateStatusTaskService{
    async execute({ id, status }: UpdateStatusTaskServiceProps){
        
        const task = await prismaClient.tasks.update({
            where: { id: id },
            data: {
                status
            }
        });

        return task;

    };
};

export { UpdateStatusTaskService }