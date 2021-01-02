export const people = [
    {
        id: "1",
        name: "tony",
        age: "30",
        gender: "male"
    },
    {
        id: "2",
        name: "taehwan",
        age: "30",
        gender: "male"
    },
    {
        id: "3",
        name: "john",
        age: "30",
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}