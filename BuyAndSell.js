var maxProfit = function(prices) {
    let min =prices[0];
    let maxProfit = 0;

    for(let i=0;i<prices.length;i++)
    {

        
      if(prices[i] <min)
        {
            min =prices[i];
        }
        else if(prices[i]-min >maxProfit)
        {
            maxProfit = prices[i]-min;
        }

     
    }
      return maxProfit;
};


// SAME

var maxProfit = function(p) {
  
 let min =p[0];
 let maxProfit =0;
 for(let i=0;i<p.length; i++)
 {
    if(p[i] <min)
    {
        min =p[i];
    }else if(p[i] -min > maxProfit)
    {
        maxProfit =p[i] - min;
    }
 }

 return maxProfit;
};


// BRUTE FORCE
function maxProfit(prices) {
    let maxProfit = 0;
    let n = prices.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let profit = prices[j] - prices[i];  // sell later day j, buy earlier day i
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}
