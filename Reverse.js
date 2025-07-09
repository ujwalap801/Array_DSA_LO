var reverseString = function(s) {
    
    let len = s.length;
    let halflength = len/2;
    for(let i=0;i<halflength ;i++)
    {
        let temp = s[i];
        s[i]= s[len- i- 1];

        s[len-i-1]= temp;
    }
    return s;
};