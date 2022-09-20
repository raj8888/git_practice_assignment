function prime_number(num){
    factors=0
    for(let i=0;i<num;i++){
       if(i%num==0){
        factors--
       } 
    }
    if(factors==2){
        return true;
    }
        return false
}


let a=45
prime_numbers(a)
if(prime_numbers(a)){
    console.log(a,"prime")
}else{
    console.log(a,"not prime")
}