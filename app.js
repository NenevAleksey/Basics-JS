// фильтрация массива по кол-ву букв
const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];

const shortNames = names.filter(name => name.length <= '5')

// console.log(shortNames);

// фильтрация коллекцый (массив объектов)

const products = [
   {
      id: 1,
      name: 'Intro to JavaScript',
      category: 'books',
      price: 150,
   },
   {
      id: 2,
      name: 'Intro to CSS',
      category: 'books',
      price: 120,
   },
   {
      id: 3,
      name: 'Deep dive into JavaScript',
      category: 'books',
      price: 350,
   },
   {
      id: 4,
      name: 'Intro to PHP',
      category: 'books',
      price: 250,
   },
   {
      id: 5,
      name: 'Deep dive into PHP',
      category: 'books',
      price: 350,
   },
];

const cheapProducts = products.filter(product => product.price <= 300);

// console.log(cheapProducts);

// использование includes при фильтрации

const developers = [
   {
      id: 1,
      fullName: 'Ivan Ivanov',
      skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
   },
   {
      id: 2,
      fullName: 'Petr Petrov',
      skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
   },
   {
      id: 3,
      fullName: 'Ian Melnikov',
      skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
   },
   {
      id: 4,
      fullName: 'Antonio Banderas',
      skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
   },
];

const tsDevelopers = developers.filter(developer => developer.skills.includes('TypeScript'));

// console.log(tsDevelopers);

// Практика на reduce. Подсчер общей стоимости корзины.

const order = [
   {
      id: 1,
      name: 'Лопата',
      price: 1000,
      quantity: 1,
   },
   {
      id: 2,
      name: 'Удочка',
      price: 1200,
      quantity: 2,
   },
   {
      id: 3,
      name: 'Ведро',
      price: 500,
      quantity: 3,
   },
   {
      id: 4,
      name: 'Мороженое',
      price: 100,
      quantity: 8,
   },
];

const totalPrice = order.reduce((acc, product) => {
   return acc + (product.price * product.quantity)
}, 0)

//console.log(totalPrice);

//поиск первого нужного объекта в коллекции 

const players = [
   {
      id: 1,
      name: 'Andres',
      surname: 'Iniesta',
      club: 'Vissel Cobe',
   },
   {
      id: 2,
      name: 'Eden',
      surname: 'Hazard',
      club: 'Real Madrid',
   },
   {
      id: 3,
      name: 'Mo',
      surname: 'Salah',
      club: 'Liverpool',
   },
   {
      id: 4,
      name: 'Lionel',
      surname: 'Messi',
      club: 'Barcelona',
   },
   {
      id: 5,
      name: 'Luka',
      surname: 'Messi',
      club: 'Acbars',
   },
];

const messi = players.find(player => player.surname === 'Messi');

// console.log(messi)

// деструктуризация

// 1)массив 

function getInfo() {
   return ['BMW', 'X3'];
}

const [carName, carSeries] = getInfo();

// console.log(carName, carSeries);

// 2)объект

const link = {
   href: '#',
   title: 'simple link',
   target: 'blank',
   className: 'link',
   id: null,
   children: {
      span: {
         content: 'Click me',
         className: 'anchor',
      },
   },
}

const {
   target,
   className,
   children: {
      span: {
         content,
         className: classNameSpan
      }
   }
} = link;

// console.log(target, className, content, classNameSpan);

// JSON 

const people = [
   {
      id: 1,
      name: 'Andres',
      surname: 'Iniesta',
      club: 'Vissel Cobe',
   },
   {
      id: 2,
      name: 'Eden',
      surname: 'Hazard',
      club: 'Real Madrid',
   },
   {
      id: 3,
      name: 'Mo',
      surname: 'Salah',
      club: 'Liverpool',
   },
   {
      id: 4,
      name: 'Lionel',
      surname: 'Messi',
      club: 'Barcelona',
   },
];

const jsonPeople = JSON.stringify(people);
// console.log(jsonPeople);

const parsePeople = JSON.parse(jsonPeople);
// console.log(parsePeople);


// SET. Массив с уникальными значениями, отсортированными от меньшего к большему
const arr = [10, 1, 21, 1, 33, 3, 33, 5, 8, 8, 1, 3, 5];

const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
// console.log(sortedArr);

// Сортировка(оставляем все кроме значений с undefined и null). FOR...IN...
const userSkills = {
   css: 'b2',
   html: 'c1',
   js: 'a2',
   ts: null,
   react: undefined,
   vue: null,
   lodash: 'a1'
}

const userApprovedSkills = {};

for (let key in userSkills) {
   if(userSkills[key] !== undefined && userSkills[key] !== null) { 
      userApprovedSkills[key] = userSkills[key];
   }
}

// console.log(userApprovedSkills);
