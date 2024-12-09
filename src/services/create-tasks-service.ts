import prismaClient from "../../src/prisma/index";

interface CreateTaskServiceProps {
    user_id: string,
    description: string;
    sector: string;
    priority: string;
    register_date: string;
    status: string;
}

class CreateTaskService {
    async execute({ user_id, description, sector, priority, register_date, status }: CreateTaskServiceProps){

        if(!description || !sector || !priority) return

        const task = await prismaClient.tasks.create({
            data: {
                user_id,
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