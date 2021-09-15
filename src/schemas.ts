import { loadFilesSync, mergeTypeDefs } from "graphql-tools";
import path from "path"

const mergeSchema = loadFilesSync(
    path.join(__dirname, "modules/**/graphql/*.gql")
)

const schemas = mergeTypeDefs(mergeSchema)

export default schemas