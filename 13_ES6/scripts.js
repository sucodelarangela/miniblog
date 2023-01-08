//#region 1 - var, let, const
var x = 10;
var y = 15;
if (y > 10) {
  var x = 5;
  // console.log(x); // 5
}
// console.log(x); // 5

let a = 10;
let b = 15;
if (b > 10) {
  let a = 5; // escopo de bloco
  // console.log(a); // 5
}
// console.log(a); // 10
let i = 100;
for (let i = 0; i < 5; i++) {
  // console.log(i); // 0 1 2 3 4
}
// console.log(i); // 100

function logName() {
  const name = 'Matheus';
  // console.log(name);
}
const name = 'Pedro';
logName(); // 'Matheus'
// console.log(name); // 'Pedro'
//#endregion
//#region 2 - arrow functions
const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5)); // 10
// console.log(arrowSum(5, 5)); // 10

const greeting = (name) => {
  if (name) {
    return 'Olá, ' + name + '!';
  } else {
    return 'Olá!';
  }
};
// console.log(greeting('Angela')); // Olá, Angela!
// console.log(greeting()); // Olá!

const testeArrow = () => console.log('testou');
// testeArrow(); // testou

const user = {
  name: 'Theo',
  sayUserName() {
    let self = this; // aqui o this é o objeto
    setTimeout(function () {
      console.log(self); // no escopo do bloco, this é a window, pois se perde a referência. Pra isso, criamos a let self para corrigir e substituir o this
      console.log('Username: ' + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    // com arrow function, a referência do this não é perdida
    setTimeout(() => {
      console.log(this);
      console.log('Username: ' + this.name);
    });
  }
};
// user.sayUserName();
// user.sayUserNameArrow()
//#endregion
//#region 3 - filter
const arr = [1, 2, 3, 4, 5];
const higherNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});
// console.log(higherNumbers); // 3, 4, 5

const users = [
  { name: 'Angela', available: true },
  { name: 'Tereza', available: false },
  { name: 'Pedro', available: false },
  { name: 'Marcos', available: true }
];
const availableUsers = users.filter((user) => user.available);
const unavailableUsers = users.filter((user) => !user.available);
// console.log(availableUsers); // Angela e Marcos
// console.log(unavailableUsers); // Tereza e Pedro
//#endregion
//#region 4 - map
const produtos = [
  { name: 'Camisa', price: 10.99, category: 'Roupas' },
  { name: 'Chaleira elétrica', price: 49.99, category: 'Eletro' },
  { name: 'Fogão', price: 400, category: 'Eletro' },
  { name: 'Calça jeans', price: 50.99, category: 'Roupas' }
];
produtos.map((produto) => {
  if (produto.category === 'Roupas') {
    produto.onSale = true;
  }
});
// console.log(produtos)
//#endregion
//#region 5 - template literals
const userName = 'Angela';
const age = 37;
// console.log(`O nome do usuário é ${userName} e ela tem ${age} anos.`); // O nome do usuário é Angela e ela tem 37 anos.
// console.log('O nome do usuário é ' + userName + ' e ela tem ' + age + ' anos.'); // O nome do usuário é Angela e ela tem 37 anos.
//#endregion
//#region 6 - destructuring
const fruits = ['Maçã', 'Laranja', 'Mamão'];
const [f1, f2, f3] = fruits;
// console.log(f3); // 'Mamão'
// console.log(f1); // 'Maçã'

const productDetails = {
  name: 'Mouse',
  price: 39.99,
  category: 'Periféricos',
  color: 'preto'
};
const { name: productName, price, category, color: productColor } = productDetails;
// console.log(`O produto é um ${productName}, custa R$${price}, pertence à categoria ${category} e é da cor ${productColor}`); // O produto é um Mouse, custa R$39.99, pertence à categoria Periféricos e é da cor preto
//#endregion
//#region 7 - spread operators
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];
// console.log(a3); // [1, 2, 3, 4, 5, 6]

const a4 = [0, ...a1, 4];
// console.log(a4); // [0, 1, 2, 3, 4]

const carName = { name: 'Gol' };
const carBrand = { brand: 'VW' };
const otherInfos = { km: 10000, price: 49900 };
const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };
// console.log(car); // {name: 'Gol', brand: 'VW', km: 10000, price: 49900, wheels: 4}
//#endregion
//#region 8 - classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product('Camisa gola V', 20);
// console.log(shirt); // {name: 'Camisa gola V', price: 20}
// console.log(shirt.productWithDiscount(20)); // 16
// console.log(shirt.productWithDiscount(50)); // 10
const tennis = new Product('Tênis verde', 120);
// console.log(tennis.productWithDiscount(15)); // 102
//#endregion
//#region 9 - herança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log('As cores são:');
    this.colors.forEach((color) => {
      // console.log(color);
    });
  }
}

const hat = new ProductWithAttributes('Chapéu', 29.9, ['Preto', 'Azul', 'Vermelho']);
// console.log(hat.name); // Chapéu
// console.log(hat.productWithDiscount(30)); // 20.929999999999996
hat.showColors(); // As cores são: Preto, Azul, Vermelho
//#endregion