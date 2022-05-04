// write your code here


fetch(`http://localhost:3000/ramens`)
.then(res=>res.json())
.then(ramens=>{
    for (let ramen of ramens){
        loadRamenImage(ramen)
        
        //addEventListener on image clicked
        ramenImg.addEventListener('click',()=>{
            let bigImage = document.querySelector('.detail-image')
            //console.log(bigImage)
            bigImage.src = ramen.image

            let ramenName = document.querySelector('h2.name')
            //console.log(ramenName)
            ramenName.textContent = ramen.name

            let restaurantName = document.querySelector('h3.restaurant')
            restaurantName.textContent = ramen.restaurant

            let ratingDisplay = document.getElementById('rating-display')
            ratingDisplay.textContent = ramen.rating

            let commentDisplay = document.getElementById('comment-display')
            commentDisplay.textContent = ramen.comment
        }
        )   

 
    } 
})

//load all ramen images in the div with #ramen-menu
function loadRamenImage(img){
    let menu = document.getElementById('ramen-menu')
    ramenImg = document.createElement('img')
    ramenImg.src = img.image
    menu.append(ramenImg)
}

//adding new ramen
function addNewRamen(){
    let form = document.getElementById('new-ramen')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        //let card = document.createElement('ul')
       
        // //let newName = document.createElement('li')
        // newName.textContent = e.target['new-name'].value
        // //console.log(newName)
        // //let newRestaurant = document.createElement('li')
        // newRestaurant.textContent = e.target['new-restaurant'].value
        
        let newImage = document.createElement('img')
        newImage.src = e.target['new-image'].value
        
        // let newRating = document.createElement('li')
        // newRating.textContent = e.target['new-rating'].value
        
        // let newComment = document.createElement('li')
        // newComment.textContent = e.target['new-comment'].value
       
        //card.append(newName,newRestaurant,newImage,newRating,newComment)
        //card.append(newImage)
        document.getElementById('ramen-menu').append(newImage)
       
        e.target.reset()

    })
    //console.log(form)

}


addNewRamen()





//create new-ramen
//add to #ramen-menu div