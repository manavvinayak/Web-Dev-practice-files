// const user = `{
//     "name": "Vinayak",
//     "age": 24,
//     "gender": "male"
// }`;
// const obj = JSON.parse(user);
// console.log(obj);

const user = {
    name: "Vinayak",
    gender: "male"
}
console.log(user.name)
const finalString =JSON.stringify(user)
console.log(finalString["name"])