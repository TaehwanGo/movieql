const tony = {
    name: "tony",
    age: "30",
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => tony // 여기서 하고 싶은대로 할 수 있음
        // 다른 db로 가서 가져오든, 다른 api에서 가져오든 등등
    }
}

export default resolvers;