import { getById, getMovies, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => { // _, args
            // console.log("args:", args); // {id : 1}
            return getById(id);
        }
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
}

export default resolvers;