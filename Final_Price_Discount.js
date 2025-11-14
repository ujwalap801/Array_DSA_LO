// BRUTE FOCE 
var finalPrices = function(prices) {

    let pCopy =[...prices]; //taking copy of array
    for(let i=0;i<prices.length;i++)
    {
        for(let j= i+1;j<prices.length;j++)

        {
            if(prices[i] >= prices[j])
            {
                pCopy[i] = prices[i]-prices[j];
                break;
            }
        }
    }
    

    return pCopy;
};



var finalPrices = function(prices) {
    let stack =[];
    let p = [...prices]
    for(let i=0;i<prices.length;i++)
    {
        while(stack.length >0 && prices[i] <= prices[stack[stack.length-1]])
        {
            p[stack[stack.length-1]] -= prices[i]
            stack.pop();


        }
        stack.push(i)
    }


    return p;
};