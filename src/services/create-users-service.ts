import prismaClient from "../../src/prisma/index";

interface CreateUserServiceProps {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({ name, email }: CreateUserServiceProps){

        if(!name || !email) return

        const user = await prismaClient.users.create({
            data: {
                name, email
            }
        })

        return user
    }
};

export { CreateUserService }