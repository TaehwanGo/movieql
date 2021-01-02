import { getById, getMovies, addMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => { // _, args
            // console.log("args:", args); // {id : 1}
            return getById(id);
        }
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
}

export default resolvers;