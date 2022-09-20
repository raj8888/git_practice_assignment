function prime_number(num){
    factors=0
    for(let i=0;i<num;i++){
       if(num%i==0){
        factors++
       } 
    }
    if(factors==2){
        return true;
    }
        return false
}


let a=45
if(prime_number(a)){
    console.log(a,"is prime number")
}else{
    console.log(a,"is not prime")
}