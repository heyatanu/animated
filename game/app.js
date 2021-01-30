const g0=document.querySelector('.g0');
const g1=document.querySelector('.g1');
const g2=document.querySelector('.g2');
const g3=document.querySelector('.g3');
const g4=document.querySelector('.g4');
const g5=document.querySelector('.g5');
const g6=document.querySelector('.g6');
const g7=document.querySelector('.g7');
const g8=document.querySelector('.g8');
const msg =document.querySelector('h3');

msg.innerHTML="START THE GAME FIRST PERSON WILL GET 'O' AND SECAND PERSON GET 'X'";


function start(){
    msg.innerHTML="START THE GAME FIRST PERSON WILL GET 'O' AND SECAND PERSON GET 'X'"; 
    let check=0


    document.body.onclick = e => {
        c=(e.target.className);
        t=document.querySelector("."+c);
        if (check===0 && t.innerHTML===""){
            t.innerHTML="O"
            check=1
            winner(check)
        }
        else if(check===1 && t.innerHTML===""){
            t.innerHTML="X"
            check=0
            winner(check)
        }
    }

}

function restart(){
    setTimeout(function(){ 
        var x, i;
        x = document.querySelectorAll("#ex");
        for (i = 0; i < x.length; i++) {
          x[i].innerHTML="";
          
        }
        start()

    }, 3000);
}



function winner(val){


    if (g6.innerHTML===g7.innerHTML && g7.innerHTML===g8.innerHTML && g6.innerHTML===g8.innerHTML && g6.innerHTML!="" && g7.innerHTML!="" && g8.innerHTML!="" ||
        g3.innerHTML===g4.innerHTML && g4.innerHTML===g5.innerHTML && g3.innerHTML===g5.innerHTML && g3.innerHTML!="" && g4.innerHTML!="" && g5.innerHTML!=""||
        g0.innerHTML===g1.innerHTML && g1.innerHTML===g2.innerHTML && g0.innerHTML===g2.innerHTML && g0.innerHTML!="" && g1.innerHTML!="" && g2.innerHTML!=""||
        g6.innerHTML===g4.innerHTML && g4.innerHTML===g2.innerHTML && g6.innerHTML===g2.innerHTML && g6.innerHTML!="" && g4.innerHTML!="" && g2.innerHTML!=""||
        g8.innerHTML===g4.innerHTML && g4.innerHTML===g0.innerHTML && g8.innerHTML===g0.innerHTML && g8.innerHTML!="" && g4.innerHTML!="" && g0.innerHTML!=""||
        g6.innerHTML===g3.innerHTML && g3.innerHTML===g0.innerHTML && g6.innerHTML===g0.innerHTML && g6.innerHTML!="" && g3.innerHTML!="" && g0.innerHTML!=""||
        g7.innerHTML===g4.innerHTML && g4.innerHTML===g1.innerHTML && g7.innerHTML===g1.innerHTML && g7.innerHTML!="" && g4.innerHTML!="" && g1.innerHTML!=""||
        g8.innerHTML===g5.innerHTML && g5.innerHTML===g2.innerHTML && g8.innerHTML===g2.innerHTML && g8.innerHTML!="" && g5.innerHTML!="" && g2.innerHTML!=""
        ){
            if (val==0){
                msg.innerHTML="X IS WINNER !!! GAME RESTART START SHORTLY !! WAIT !!";
                restart()
            }
            else{
                msg.innerHTML="O IS WINNER !!! GAME RESTART START SHORTLY !! WAIT !!";
                restart()
                
            }
            
        }
    else{
        var x, i,m=0;
        x = document.querySelectorAll("#ex");
        for (i = 0; i < x.length; i++) {
          if(x[i].innerHTML==""){
              m=m+1
          }
        }
        if (m==0){
            msg.innerHTML="NO RESULT !!! GAME RESTART START SHORTLY !! WAIT !!";
            restart()

        }
    }

}

start()
function myFunction(){
    this.onclick = null;
}