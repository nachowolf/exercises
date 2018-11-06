let amount = document.querySelectorAll('.amount');
let makes = document.querySelectorAll('.makes')

axios.get('http://api-tutor.herokuapp.com/v1/colors')
.then(function(response){
    for(let amt of amount){
    amt.innerHTML = response.data.length + " Cars."
    }
});

axios.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(response){
    for(let make of makes){
    make.innerHTML = response.data.length + " makes."
    }
});