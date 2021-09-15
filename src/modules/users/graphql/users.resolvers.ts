import { container } from "tsyringe"
import { CreateUserService } from "../services/CreateUserService"
import { GetUsersService } from "../services/GetUsersService"

// resolvers chamam os metódos 
const usersResolvers = {
    // query seria a busca e retorno de dados
    Query: {
        // graphql trabalha no formato de chamar funções
        getAllUsers() {
            const getUserService = container.resolve(GetUsersService)
            
            const users = getUserService.execute()

            return users
        }
    },
    // modificação dos dados
    Mutation: {
        createUser(_, {input}) {
            const createUserService = container.resolve(CreateUserService)

            const user = createUserService.execute(input)
        }
    }
}

export default usersResolvers