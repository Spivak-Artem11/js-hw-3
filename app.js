// 1;

// const map = ["_id", "name", "isActive", "balance"];

// const users = [
//   {
//     _id: "5d220b10e8265cc978e2586b",
//     isActive: true,
//     balance: 2853.33,
//     age: 20,
//     name: "Buckner Osborne",
//     gender: "male",
//     company: "EMPIRICA",
//     email: "bucknerosborne@empirica.com",
//     phone: "+1 (850) 411-2997",
//     registered: "2018-08-13T04:28:45 -03:00",
//   },
//   {
//     _id: "5d220b10144ef972f6c2b332",
//     isActive: true,
//     balance: 1464.63,
//     age: 38,
//     name: "Rosalie Smith",
//     gender: "female",
//     company: "KATAKANA",
//     email: "rosaliesmith@katakana.com",
//     phone: "+1 (943) 463-2496",
//     registered: "2016-12-09T05:15:34 -02:00",
//   },
//   {
//     _id: "5d220b1083a0494655cdecf6",
//     isActive: false,
//     balance: 2823.39,
//     age: 40,
//     name: "Estrada Davenport",
//     gender: "male",
//     company: "EBIDCO",
//     email: "estradadavenport@ebidco.com",
//     phone: "+1 (890) 461-2088",
//     registered: "2016-03-04T03:36:38 -02:00",
//   },
// ];

// function resArr(obj, arr) {
//   let newUsers = [];
//   for (let i = 0; i < obj.length; i++) {
//     let user = {};
//     for (let j = 0; j < arr.length; j++) {
//       user[arr[j]] = obj[i][arr[j]];
//     }
//     newUsers.push(user);
//   }
//   return newUsers;
// }

// resArr(users, map);

// // console.log(resArr(users, map));

// function ressArr(objs, arr) {
//   return objs.map((user) => {
//     const newUser = [];
//     for (let j = 0; j < arr.length; j++) {
//       newUser[arr[j]] = user[arr[j]];
//     }

//     return newUser;
//   });
// }

// console.log(ressArr(users, map));

// 2;

// const str = [
//   { char: "a", index: 12 },
//   { char: "w", index: 8 },
//   { char: "Y", index: 10 },
//   { char: "p", index: 3 },
//   { char: "p", index: 2 },
//   { char: "N", index: 6 },
//   { char: " ", index: 5 },
//   { char: "y", index: 4 },
//   { char: "r", index: 13 },
//   { char: "H", index: 0 },
//   { char: "e", index: 11 },
//   { char: "a", index: 1 },
//   { char: " ", index: 9 },
//   { char: "!", index: 14 },
//   { char: "e", index: 7 },
// ];

// function resStr(arr) {
//   return arr
//     .sort((a, b) => a.index - b.index)
//     .reduce((acc, user) => {
//       return (acc += user.char);
//     }, "");
// }
// resStr(str);

// console.log(resStr(str));

// 3;

// const organisation = {
//   name: "Google",
//   info: {
//     employees: ["Vlad", "Olga"],
//     partners: ["Microsoft", "Facebook", "Xing"],
//   },
// };

// function getInfo({
//   name = "Unknow",
//   info: {
//     partners: [one = "none", two = "none"],
//   },
// }) {
//   console.log(`Name: ${name}`);
//   console.log(`Partners: ${one}, ${two} `);
// }

// getInfo(organisation);

// 4;

// const person = {
//   name: "Denis",
//   age: 30,
//   lastGet: "",
//   lastUpdate: "",
// };

// // function getTime(user, newName = "Denis") {
// //   if (user.name !== `${newName}`) {
// //     user.name = `${newName}`;
// //     person.lastGet = new Date();
// //     person.lastUpdate = `${newName}`;
// //   }
// //   return user;
// // }

// // getTime(person, `a`);

// // console.log(getTime(person, `a`));

// // or

// function getTime(user, newName = "Denis") {
//   user.name = `${newName}`;
//   person.lastGet = new Date();
//   person.lastUpdate = `${newName}`;
//   return user;
// }

// getTime(person, `b`);

// console.log(getTime(person, `b`));

// 5;

// const product = {
//   brand: "Apple",
//   model: "iPhone 7",
//   price: "$300",
//   get tlf() {
//     return this.brand + " " + this.model;
//   },
//   set tlf(newTlf) {
//     product.brand = newTlf.slice(0, newTlf.indexOf(" "));
//     product.model = newTlf.slice(newTlf.indexOf(" ") + 1);
//   },
// };
