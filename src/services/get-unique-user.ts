import prismaClient from "../prisma"

interface GetUniqueUserServiceProps{
    idUser: string
};

class GetUniqueUserService{
    async execute({idUser}: GetUniqueUserServiceProps){

        if(!idUser) return

        const user = prismaClient.users.findUnique({
            where: {
                id: idUser
            }
        })

        return user
    }
};

export { GetUniqueUserService }