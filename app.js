function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adv = document.getElementById("adv").value;

    document.getElementById("sentence").innerHTML = sentences(verb, adv, person, place, adj)
}

function sentences(verb, adv, person, place, adj) {
    sentenceArray = [`When ${person} jumnped ${adv} off the building, everyone went ${adj}. Thankfully, it was all for a shot in a movie at ${place}.`,
`${person} thought Mary was crazy. She would ${verb} ${adv} all over the place!`,
`${place} is a very nice place. You can find many ${adj} people! One of them goes by ${person}.`]

ranN = Math.floor(Math.random() * sentenceArray.length)

return sentenceArray[ranN]
}