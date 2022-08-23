//section3

function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adv = document.getElementById("adv").value;

    document.getElementById("sentence").innerHTML = sentences(verb, adv, person, place, adj)
}

function sentences(verb, adv, person, place, adj) {
    sentenceArray = [`When ${person} jumped ${adv} off the building, everyone went quiet. Thankfully, it was all for a shot in a movie at ${place}.`,
`${person} thought Mary was crazy. She would ${verb} ${adv} all over the place!`,
`${place} is a very nice place. You can find many ${adj} people! One of them goes by ${person}.`]

ranN = Math.floor(Math.random() * sentenceArray.length)

return sentenceArray[ranN]
}

//section4

var a = [1, 2, 4, 9]

var wordArr = [
    {
        word: "cat",
        hint: "the opposite of a dog"
    },
    {
        word: "time",
        hint: "everything revolves around this"
    },
    {
        word: "boat",
        hint: "something that floats"
    },
    {
        word: "paint",
        hint: "something many old artists did"
    },
]

var rN = Math.floor(Math.random() * wordArr.length);

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;
document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;
var w = document.getElementById("word");
var correct = []
var counter = word.length + 2

document.getElementById("wrong").innerHTML = counter;

var splitWord = word.split("");

var emptySplitWord = [];

for (i = 0; i < splitWord.length; i++) {
    emptySplitWord[i] = "-"
    console.log(emptySplitWord);
    document.getElementById("word").innerHTML = emptySplitWord.join(" ")
}

function enterLetter() {
    var letter = document.getElementById("letter").value;

    for (x = 0; x < splitWord.length; x++) {
        if (letter == splitWord[x]) {
            emptySplitWord[x] = letter;
            w.innerHTML = emptySplitWord.join(" ");
            document.getElementById("letter").value = "";
            computer.push(1);
        } else {
            document.getElementById("letter").value = "";
        }
    }

    if (correct.length == emptySplitWord.length) {
        alert("THE END")
    } else if (counter > 1) {
        counter -= 1;
        document.getElementById("wrong").innerHTML = counter
    } else if (counter == 1) {
        alert("YOU LOST")
    }
}