let amount = document.querySelectorAll('.amount');
let makes = document.querySelectorAll('.makes')
var allModels   = document.getElementById("all-models").innerHTML;
var template = Handlebars.compile(allModels);

axios.get('http://api-tutor.herokuapp.com/v1/colors')
    .then(function (response) {
        for (let amt of amount) {
            amt.innerHTML = response.data.length + " Cars."
        }
    });

axios.get('http://api-tutor.herokuapp.com/v1/makes')
    // .then(function(response){
    //     console.log(response.data)
    //     for(let make of makes){
    //     make.innerHTML = response.data.length + " makes."
    //     }
    // })

    .then(function (response) {

            let allBadges = []
            let badges = ['https://seeklogo.com/images/V/vw-volkswagen-logo-D6224E8B73-seeklogo.com.jpg', 'https://www.toyota-global.com/pages/contents/showroom/emblem/passion/images/passion_img01.jpg', 'http://www.carlogos.org/logo/Nissan-logo.png', 'http://pictures.dealer.com/t/tomwoodautogroup/1771/166f3ebd0a0d028a013d725444d7d082.png'];

            for(let i=0;i<badges.length;i++){
                allBadges.push({
                  badge:badges[i],
                  make:response.data[i]
                })
            }

        var html    = template(allBadges);
        console.log(allBadges)
    });

// 0: "Volkswagen"
// 1: "Toyota"
// 2: "Nissan"
// 3: "Ford"