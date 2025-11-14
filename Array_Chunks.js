
var chunk = function(arr, size) {
    let n= arr.length;
    if(size <=0 || n ==0) return [];
    
    let ans =[];

    for(let i=0; i<n ;i+= size)
    {
        ans.push(arr.slice(i, i+size));
    }


    return ans;
};



// using two 
var chunk = function(arr, size) {
    if(arr.length ==0 || size <=0) return [];

    let result =[];
    let window =[];
    for(let i=0;i<arr.length;i++)
    {
        window.push(arr[i]);

        if(window.length == size || i== arr.length-1)
        {
            result.push(window);
            window =[];
        }
    }

    return result;
    
};
