document.addEventListener('keydown', function (e) {
   /* switch (e.code) {
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowDown':
            imageManager.execute(e.code)
            break*/
    
    if (imageManager.hasOwnProperty(e.code)) {
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function () {
        this.image.style.top = this.image.offsetTop - 10
    },
    ArrowLeft: function () {
        this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowRight: function () {
        this.image.style.left = this.image.offsetLeft + 10
    },
    ArrowDown: function () {
        this.image.style.top = this.image.offsetTop + 10
    },
}

imageManager.execute = function (key) {
    let methodeName = imageManager[key]
    let functionParams = [].splice.call(arguments, 1)
    return methodeName.apply(imageManager)   
    }

    // add a random move
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    setInterval(function() {
        let randomNum = getRandomInt(4)
        switch (randomNum) {
            case 0 : 
               imageManager.ArrowUp()
               break;
            case 1 :
                imageManager.ArrowLeft()
                break;
            case 2 :
                imageManager.ArrowRight()
                break;
            case 3 :
                imageManager.ArrowDown()
                break;
            default: 
                console.log("terminé")
        }
        imageManager.ArrowDown()
    }, 500)
