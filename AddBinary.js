/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    while(a.length < b.length) a= "0"+a;
    while (b.length <a.length) b ="0"+b;
let result ='';
let carry =0;

for(let i=a.length-1 ;i>=0;i--)
{
    let bitA = Number(a[i]);
    let bitB = Number(b[i]);

    let sum = bitA+bitB+carry;

    let bit = sum %2;

    carry = sum >=2 ?1:0;

    result =bit+result;

}

if(carry ===1)
{
    result ="1"+result
}
return result;
    
};