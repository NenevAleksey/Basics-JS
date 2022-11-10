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
   if (userSkills[key] !== undefined && userSkills[key] !== null) {
      userApprovedSkills[key] = userSkills[key];
   }
}
// console.log(userApprovedSkills);


//Асинхроный js
//метод fetch по примеру сайта JSONPlaceholder

// fetch('https://jsonplaceholder.typicode.com/posts/1',//url 
//    {
//       method: 'POST', // или 'GET/PUT/PATCH/DELETE'
//       body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//       headers: {
//          'Content-Type': 'application/json'
//       }
//    })
//    .then(response => response.json()) //преобразование из json формата
// .then(json => console.log(json)) //используем данные

/*
ОСНОВНЫЕ:
   Метод GET запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.
   POST используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то побочные эффекты на сервере.
   PUT заменяет все текущие представления ресурса данными запроса.
   DELETE удаляет указанный ресурс.
   PATCH используется для частичного изменения ресурса.
ВТОРОСТЕПЕННЫЕ:
   CONNECT устанавливает "туннель" к серверу, определённому по ресурсу.
   OPTIONS используется для описания параметров соединения с ресурсом.
   TRACE выполняет вызов возвращаемого тестового сообщения с ресурса.
   HEAD запрашивает ресурс так же, как и метод GET, но без тела ответа.
*/

//Promise 
const myFirstPromise = new Promise((resolve, reject) => {
   // выполняется асинхронная операция, которая в итоге вызовет:
   //
   //   resolve(someValue); // успешное завершение
   // или
   //   reject("failure reason"); // неудача
});

//пример 
let myFirstPromise1 = new Promise((resolve, reject) => {
   // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
   // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
   // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
   setTimeout(function () {
      resolve("Success!"); // Ура! Всё прошло хорошо!
   }, 250);
});

myFirstPromise1.then((successMessage) => {
   // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
   // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
   // console.log("Ура! " + successMessage);
});

/* 
   Promise может находиться в трёх состояниях:
   - ожидание (pending): начальное состояние, не исполнен и не отклонён.
   - исполнено (fulfilled): операция завершена успешно.
   - отклонено (rejected): операция завершена с ошибкой.

Методы:
   Promise.all(iterable) - выполнится, когда све промисы пройдут успешно или хотябы один с ошибкой
   Promise.race(iterable) - выполнится, когда прийдет ответ из самого быстрого промиса
   Promise.reject(reason) и Promise.resolve(value) - если нужно создавать сайт когда бекенд еще не готов)
*/

// ООП

//создание класса
class Rectangle {
   constructor(width, hight) {
      this.width = width;
      this.hight = hight;
   }

   area() {
      return (this.width * this.hight)
   }
}

const rect1 = new Rectangle(5, 6);
// console.log(rect1.area()) // должен вернуть 30

//наследование
class Parallelepiped extends Rectangle {
   constructor(width, hight, depth) {
      //super используется для наследования
      super(width, hight);
      this.depth = depth;
   }

   volume() {
      return (this.width * this.hight * this.depth)
   }
}

const rect2 = new Parallelepiped(5, 6, 5);
// console.log(rect2.volume()); //должен вернуть 150
