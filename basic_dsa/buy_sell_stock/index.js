//Brute Force

const buyAndSellStock = (prices) => {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }
  return globalProfit;
};

// console.log(buyAndSellStock([7, 1, 5, 3, 6, 2]));
// console.log(buyAndSellStock([7, 6, 5, 4, 3, 2, 1]));

// Greedy Algorithm
// [7,1,5,3,6,4]

// 1) Consider min = arr[0] , profit =0
// 2) Loop if(arr[i]< min) min = arr[i]   also calc currentProfit = arr[i] - arr[i-1] if(currentProfit> profit ) profit = currentProfit

const maxProfit = (prices) => {
  let min = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    const currentProfit = prices[i] - min;
    // if (currentProfit > profit) {
    //   profit = currentProfit;
    // }
    profit = Math.max(profit, currentProfit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 5, 4, 3, 2, 1]));
