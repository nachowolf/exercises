module.exports = function(){

    function fizzBuzzer (start){
        let list = []
        for(let i=1; i<=start; i++){

            if(i % 3 === 0 && i % 5 === 0 ){
            //   console.log('FizzBuzz')
               list.push("FizzBuzz")
            }
          
            else if(i % 3 === 0){
            //   console.log('Fizz')
              list.push("Fizz")
            }
          
            else if(i % 5 === 0){
            //   console.log('Buzz')
              list.push("Buzz")
            }
          else{
            // console.log(i)
            list.push(i);
          }

          }
        //   console.log(list)
          return list
    }

    return{
        fizzBuzzer
    }
}