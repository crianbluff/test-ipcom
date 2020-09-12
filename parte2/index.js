const coins = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

const amountToCoins = (amount) => {  
  // If the amount is 0 return empty array
  amount = parseFloat(amount);
  if ( amount === 0 ) {
    return [];
  }

  // If the subtract is major must subtract the quantity about what there are and at the first position of the array return coins value and it's called again until final
  if ( amount >= coins[0] ) {
    let left = (Number(amount).toFixed(2) - coins[0]);
    return [coins[0], ...amountToCoins(left)];
  } else if ( coins.length ) {
      // If the quantity is not major must remove the param that no longer works
      coins.shift();
      return amountToCoins(amount);
    }
}

const x = amountToCoins('2.34');
console.log(x);