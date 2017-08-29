/*function sendApiRequest() {
    var userInput = document.getElementById("input").value 
    console.log(userInput)
    var giphyApiKey = "b88520c728184ddea08074d5cfaefa2d"
    
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
//grab element using a DOM function/method


    fetch(giphyApiUrl)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        // here we'll code out what we want to do with the data
        console.log(json.data[0].images.fixed_height.url)
        //[0].images.fixed_height.url
        var imgPath= json.data["0"].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src",imgPath) //src attribute for an image source (attribute,what setting attribute to)
        document.body.appendChild(img)
    })
}
*/

/*<input type="text" value="This is some text" id="text" style="width: 150px;" />
<br />
<input type="button" value="Click Me" id="button" />​*/

/*<script type="text/javascript">
document.getElementById("button").addEventListener('click', function () {
    var text = document.getElementById('text');
    text.value += ' after clicking';
});
</script>*/

function happy() {

    var happy = ["A happy woman is a beautiful woman", "When we fulfill our function, which is to truly love ourselves and share love with others, then true happiness sets in”-Gabrielle Bernstein", "Maybe the truth is, there’s a little bit of loser in all of us. Being happy isn’t having everything in your life be perfect. Maybe it’s about stringing together all the little things- Ann Brashers "]

    var length= happy.length
    console.log(length)
    var smiles = document.createElement("p")
    var random= (Math.floor(Math.random() * length))
    smiles.innerHTML=  `${happy[random]}`; 
    document.body.appendChild(smiles)
}

function strength() {
    var strength = [" 'I raise up my voice—not so I can shout, but so that those without a voice can be heard...we cannot succeed when half of us are held back.' ―Malala Yousafzai", "If you want something said, ask a man; if you want something done, ask a woman. —Margaret Thatcher", "I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay. ―Madonna"]
    var length= strength.length
    console.log(length)
    var muscles = document.createElement("p")
    var random= (Math.floor(Math.random() * length))
    muscles.innerHTML=  `${strength[random]}`; 
    document.body.appendChild(muscles)

/*document.getElementById("muscles").innerHTML =*/

}

function love() {
    var love = ["If you are searching for that one person that will change your life, take a look in the mirror. ", "You ALONE are enough. You have nothing to prove to anyone.- Maya Angelou", "The relationship with yourself sets the tone for every other relationship you have."]
var length= love.length
    console.log(length)
    var hearts = document.createElement("p")
    var random= (Math.floor(Math.random() * length))
    hearts.innerHTML=  `${love[random]}`; 
    document.body.appendChild(hearts)

}


 /*var happy = document.getElementById("happy")
    console.log(userInput)
    var strength = document.getElementById("strength")
    console.log(userInput)
    var love = document.getElementById("love")
    console.log(userInput)*/