function home(){
    window.open("home page.html")
}

function h(){
    var game = new Array()
            game[0]= "chick.html"
            game[1]= "egg.html"
            game[2]="ring.html"
            game[3]="moth.html"
            game[4]="sale.html"

            var i = Math.floor(Math.random() * game.length)
            parent.location = game[i]
}

function ro(){
    window.open("rock.html")
}

function q(){
    var game = new Array()
            game[0]= "1.html"
            game[1]= "2.html"
            game[2]= "3.html"
            game[3]= "4.html"
            game[4]= "5.html"
            game[5]= "6.html"

            var i = Math.floor(Math.random() * game.length)
            parent.location = game[i]
}

function w() {
    var aud1 = new Audio("booing.mp3")
    aud1.play()
    window.open("lose.html")
}

function r(){
    var aud2 = new Audio("cheers1.wav")
    aud2.play()
    window.open("win.html")
}

var ru =0
var pu=0
var su=0
var rc=0
var pc=0
var sc =0

function cmove(){
    var game = new Array()
            game[0]= "cro"
            game[1]= "csc"
            game[2]= "cpa"

            var i = Math.floor(Math.random() * game.length)
            document.getElementById(game[i]).style.visibility='visible';
            if (game[i] == "cro"){
                rc=1
            }
            else if (game[i] == "csc"){
                sc = 2 
            }
            else{
                pc=3
            }
            
}

function umoveuro(){
    document.getElementById("uro").style.visibility='visible';
    ru = 1
}

function umoveupa(){
    document.getElementById("upa").style.visibility='visible';
    pu = 3
}

function umoveusc(){
    document.getElementById("usc").style.visibility='visible';
    su = 2
}

function rg(){
    if (ru == rc){
        setTimeout(function(){
            alert("it's a tie")
            window.open("play againR.html")
        },1000)
    }
    else if ((sc - ru) == 1){
        setTimeout(function(){
            alert("YOU WON !!!!")
            window.open("play againR.html")
        },1000)
    }
    else {
        setTimeout(function(){
            alert("you lost :(((((")
            window.open("play againR.html")
        },1000)
    }
}

function pg(){
    if (pu == pc){
        setTimeout(function(){
            alert("it's a tie")
            window.open("play againR.html")
        },1000)
    }
    else if ((pu - sc) == 1){
        setTimeout(function(){
            alert("you lost :(((((")
            window.open("play againR.html")
        },1000)
    }
    else {
        setTimeout(function(){
            alert("YOU WON !!!!")
            window.open("play againR.html")
        },1000)
    }
}

function sg(){
    if (su == sc){
        setTimeout(function(){
            alert("it's a tie")
            window.open("play againR.html")
        },1000)
    }
    else if ((pc - su) == 1){
        setTimeout(function(){
            alert("YOU WON !!!!")
            window.open("play againR.html")
        },1000)
    }
    else {
        setTimeout(function(){
            alert("you lost :(((((")
            window.open("play againR.html")
        },1000)
    }
}