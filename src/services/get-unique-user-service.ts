import prismaClient from "../prisma"

interface GetUniqueUserServiceProps{
    user_id: string
};

class GetUniqueUserService{
    async execute({user_id}: GetUniqueUserServiceProps){

        if(!user_id) return

        const user = prismaClient.users.findUnique({
            where: {
                id: user_id
            }
        })

        return user
    }
};

export { GetUniqueUserService }