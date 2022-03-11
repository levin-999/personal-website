var i = 0;
let txt = "> Hello there! $ > My name is Levin Zehnder $ > I live in Bern in Switzerland $ > I am a software developer in training $ > In my freetime I play football or play video games $ > My favourite food is pizza $ > Well, that's pretty much about me!";
let speed = 50;


function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) === '$') {
            document.getElementById("3").innerHTML += "<br>";
        }else {
            document.getElementById("3").innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

async function getIdea() {
    const paragraph = document.getElementById("random-activity")
    const data = await fetch('https://www.boredapi.com/api/activity/')
    const response = await data.json();
    const idea = response.activity;
    paragraph.innerText = "> " + idea;
}


function start() {
    typeWriter();
    getIdea()
}