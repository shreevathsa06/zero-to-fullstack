function bankAccount(initial) {
  let balance = initial;
  return {
    deposit: amount => balance += amount,
    withdraw: amount => balance -= amount,
    getBalance: () => balance
  };
}

const myAcc = bankAccount(100);
myAcc.deposit(50);
console.log(myAcc.getBalance()); // 150
