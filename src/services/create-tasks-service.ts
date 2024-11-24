import prismaClient from "../../src/prisma/index";

interface CreateTaskServiceProps {
    idUser: string,
    description: string;
    sector: string;
    priority: string;
    register_date: Date;
    status: string;
}

class CreateTaskService {
    async execute({ idUser, description, sector, priority, register_date, status }: CreateTaskServiceProps){

        if(!description || !sector || !priority) return

        const task = await prismaClient.tasks.create({
            data: {
                idUser,
                description,
                sector,
                priority,
                register_date,
                status,
            }
        })

        return task
    }
};

export { CreateTaskService }