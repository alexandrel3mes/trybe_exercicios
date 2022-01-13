const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função. */

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  /* deliveryPerson, name, phoneNumber, adress */
  const delPer = order.order.delivery.deliveryPerson;
  const nam = order.name;
  const pn = order.phoneNumber;
  const ad = `${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`;

  const msg = `Olá ${delPer}, entrega para: ${nam}, Telefone: ${pn}, R. ${ad}`;
  
  console.log(msg);

}

customerInfo(order);

/* Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  /* name, marguerita, pepperoni, drinks.coke, payment.total */
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  const pay = order.payment.total;
  const nam = order.name;
  const pizza = Object.keys(order.order.pizza);
  const coke = Object.values(order.order.drinks.coke);

  const newMsg = `Olá ${nam}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coke[0]} é R$ ${pay},00.`

  console.log(newMsg);
}

orderModifier(order);