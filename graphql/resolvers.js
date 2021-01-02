import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => { // _, args
            // console.log("args:", args); // {id : 1}
            return getById(id);
        }
    }
}

export default resolvers;