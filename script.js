class lettre{
    wordContent;
    indication;
    proposoleWord;
    constructor(wordContent,indication,proposoleWord){
        this.wordContent=wordContent.toUpperCase();
        this.indication=indication.toLowerCase();
        this.proposoleWord=proposoleWord.toUpperCase();
    }
    }

    //les differents mots et leur indications  
var tableauWord=[];
        tableauWord[0]= new lettre("please","to beg a pardon of someone!","EESAVAELTPR");
        tableauWord[1]= new lettre("eat","what you do when your are angry!","AFOPTEGOD");
        tableauWord[2]=new lettre("drink","what you do when you're thisrty!","ekrnigdze"); 
        tableauWord[3]= new lettre("phone","to make a call","prhrornfe");
        tableauWord[4]= new lettre("pray","To speak with God!","bpbrbaby");
        tableauWord[5]=new lettre("drink","what you do when you're thisrty!","ekrnigdze"); 
    var choix=0;//variable permettant de faire un choix 
        var content=document.querySelector('.content')
var proposeL=document.querySelectorAll('.letter');
var playL=document.querySelectorAll('.letters');
var play=document.querySelector('.play');
//var reeplay=document.querySelector('.reeplay');
var timer=document.querySelector('.timer');
var info=document.querySelector('.info'); 
var scre=document.querySelector(".lettersPlay");
var screj=document.querySelector(".letterPropose");
var coverPlay=document.querySelector(".coverPlay");
let vid=document.querySelector('.vid'); 
let k=0;
let nodisplay=0;
let mystereWord="";
let etape=document.querySelector('.etape');
play.textContent="Play";
play.addEventListener('click',showgame);
// reeplay.addEventListener('click',()=>{
//     mystereWord="";
// choix=0;
//     //  screj.textContent="";
//     // scre.textContent="";
//     scre.style.backgroundColor="white";
//     k=0;
//     nodisplay=0;
//    // play.removeEventListener('click',showgame);
//     for(prro=0;prro<tableauWord[choix].proposoleWord.length;prro++){
//         playL[prro].classList.add('shows');
//         playL[prro].textContent=tableauWord[choix].proposoleWord[prro];
// }
// for(showclasss=0;showclasss<tableauWord[choix].wordContent.length;showclasss++){
//     proposeL[showclasss].classList.add('show');
//     proposeL[showclasss].textContent=" ";
// }
//     showgame();
// });
function showgame(){
    k=0;
    nodisplay=0;
    vid.classList.add('hid');
    content.classList.add('start');                                                          
    play.classList.add('position');
    if(play.textContent=="Play"){ 
        play.style.display="none";
        etape.textContent="Etape "+ choix + " / 25";
        //play.textContent="stop";
        //debut ecoute evenement sur chaque lettre
        //Affichage de nombre de case devrant recevoir les propositions selon le nombre de cractere de la proposition
        info.textContent=tableauWord[choix].indication;
        for(showclass=0;showclass<tableauWord[choix].wordContent.length;showclass++){
                        proposeL[showclass].classList.add('show');
        }
        for(pro=0;pro<tableauWord[choix].proposoleWord.length;pro++){
                        playL[pro].classList.add('shows');
                        playL[pro].textContent=tableauWord[choix].proposoleWord[pro];
        }
        //fin affichage de nombre de cases
        for(let j=0; j<playL.length;j++){
            playL[j].addEventListener('click',function play_now(){
              let i=0;
              let placeDispo=0;
              while(i<proposeL.length){
              if(proposeL[i].textContent==""){
                  proposeL[i].textContent=playL[j].textContent;
                  break;
              }
              
                 i++;
              }
              mystereWord=mystereWord+playL[j].textContent;
             // playL[j].style.display="none";
             playL[j].classList.remove('shows');
            // playL[j].removeEventListener('shows');
          });
                   
         
} 
        //Fin d'ecoue d'evenement 
        timer.textContent=0;
        k=0;
        var compte=setInterval(()=>{
       
            k=k+1;
               timer.textContent=k;
               if(k==10){
                  
                            if(mystereWord==tableauWord[choix].wordContent){
                                // content.style.backgroundImage="url('4.jpg')";
                                info.classList.add('rotation');
                                info.textContent="WIN";
                                scre.style.color="green";
                                scre.style.backgroundColor="green";
                                clearInterval(compte);
                                //choix=choix+1;
                                play.style.display="block";
                                play.textContent="next";
                                // alert('je suis next');
                                coverPlay.style.zIndex="99";
                                info.textContent="Win!";
                                for(prl=0;prl<tableauWord[choix].proposoleWord.length;prl++){
                                    playL[prl].classList.remove('shows');
                                    playL[prl].textContent=tableauWord[choix].proposoleWord[prl];
                    }  
                                
                            }
                            else{
                                info.classList.add('rotate');
                                info.textContent="LOST";
                                scre.style.color="red";
                                scre.style.backgroundColor="red";
                                clearInterval(compte);
                                play.style.display="block";
                                play.textContent="replay";
                                choix=choix;
                                coverPlay.style.zIndex="99";
                                info.textContent="You loose!"
                                for(pr=0;pr<tableauWord[choix].proposoleWord.length;pr++){
                                    playL[pr].classList.remove('shows');
                                    playL[pr].textContent=tableauWord[choix].proposoleWord[pr];
                    }  
                            }
               }
               
         },1000);
        var supervisor=setInterval(()=>{
            nodisplay=nodisplay+1;
            if(k==10 && nodisplay==10){
                        clearInterval(compte);
            //             for(showclass=0;showclass<tableauWord[choix].wordContent.length;showclass++){
            //                 proposeL[showclass].classList.add('show');
            //                 proposeL[showclass].textContent="";
            //                  } 
                        //screj.textContent="Jeu terminé";
                    //portion traitant la possibilite de ne pas gagner
                        
                        
                        // for(let l=0; l<playL.length;l++){
                        //     //playL[j].removeEventListener('click',play_now);
                        //     playL[l].style.color="red";
                        //     playL[l].addEventListener('click',function play_now(){
                        //         let b=0;
                        //         let placeDispo=0;
                        //         while(b<proposeL.length){
                            //         if(proposeL[b].textContent==""){
                            //             proposeL[b].textContent=playL[l].textContent;
                            //             console.log(playL[l].textContent);    
                            //             break;
                            //         }
                                
                        //             b++;
                        //         }
                        //     });
                                    
                        // }
                       
               
            }
            // else if(nodisplay==25){
            //         screj.textContent="";
            //         scre.textContent="";
            //         scre.style.backgroundColor="white";

            //     }
            else if(nodisplay==11){
                coverPlay.style.zIndex="-1";
                    info.classList.remove('rotation');
                for(clear=0;clear<=proposeL[clear];clear++){
                    proposeL[clear].textContent="";
                }
                //info.textContent=tableauWord[choix].indication;
                // for(showclass=0;showclass<tableauWord[choix].wordContent.length;showclass++){
                //     proposeL[showclass].classList.remove('show');
                //     proposeL[showclass].textContent="";
                //             }
                    //        console.log(nodisplay)
                // nodisplay=0;
            }
            //console.log(nodisplay);
        },1000)
        
    }



    else if(play.textContent=="replay") {
                    play.style.display="none";
                    etape.textContent="Etape "+ choix + " / 25";
                    mystereWord=""
                    clearInterval(supervisor);
                    scre.style.color="pinck";
                    scre.style.backgroundColor="white";
                  //  alert("bonjour je suis replay et mon choix est "+ choix);
                    info.textContent=tableauWord[choix].indication;
                    for(showclass=0;showclass<tableauWord[choix].wordContent.length;showclass++){
                                    proposeL[showclass].classList.add('show');
                                    proposeL[showclass].textContent="";
                                    proposeL[showclass].style.color="black";
                    }
                    for(pro=0;pro<tableauWord[choix].proposoleWord.length;pro++){
                                    playL[pro].classList.add('shows');
                                    playL[pro].textContent=tableauWord[choix].proposoleWord[pro];
                    }
                    let z=0;
                    var replayTime=setInterval(()=>{
                        z=z+1;
                        timer.textContent=z;
                        if(z==10){
                           
                                     if(mystereWord==tableauWord[choix].wordContent){
                                        info.classList.add('rotation');
                                        info.textContent="WIN";
                                         scre.style.color="green";
                                         scre.style.backgroundColor="green";
                                         clearInterval(replayTime);
         
                                         //choix=choix+1;
                                         play.style.display="block";
                                         play.textContent="next";
                                         // alert('je suis next');
                                         coverPlay.style.zIndex="99";
                                         info.textContent="Win!";
                                         for(prlss=0;prlss<tableauWord[choix].proposoleWord.length;prlss++){
                                             playL[prlss].classList.remove('shows');
                                             playL[prlss].textContent=tableauWord[choix].proposoleWord[prlss];
                             }  
                                         
                                     }
                                     else{
                                         info.classList.add('rotation');
                                         info.textContent="LOST";
                                         scre.style.color="red";
                                         scre.style.backgroundColor="red";
                                         clearInterval(replayTime);
                                         play.style.display="block";
                                         play.textContent="replay";
                                         choix=choix;
                                         coverPlay.style.zIndex="99";
                                         info.textContent="You loose!";
                                         for(prs=0;prs<tableauWord[choix].proposoleWord.length;prs++){
                                             playL[prs].classList.remove('shows');
                                             playL[prs].textContent=tableauWord[choix].proposoleWord[prs];
                             }  
                                        
                                     }
                                     }
                        // console.log(z);
                        // console.log(mystereWord);
                    },1000); 
                    let comptRot=0;
                var rotInfo=setInterval(()=>{
                            comptRot=comptRot+1;
                            if(comptRot==11){
                                info.classList.remove('rotation');
                            }
                },1000);    
               
    }





   else if(play.textContent=="next"){
        play.style.display="none";
                                  mystereWord="";  
                              //  info.textContent="WIN";
                                scre.style.color="pinck";
                                scre.style.backgroundColor="white";
       for(showcla=0;showcla<tableauWord[choix].wordContent.length;showcla++){
        proposeL[showcla].classList.remove('show');
        proposeL[showcla].textContent="";
                }
            choix=choix+1;
            etape.textContent="Etape "+ choix + " / 25";
           //alert("bonjour je suis deja le boutton next et mon choix est :"+ choix);
            info.textContent=tableauWord[choix].indication;
                    for(showclass=0;showclass<tableauWord[choix].wordContent.length;showclass++){
                                    proposeL[showclass].classList.add('show');
                                    proposeL[showclass].textContent="";
                                    proposeL[showclass].style.color="black";
                                }
                    for(pro=0;pro<tableauWord[choix].proposoleWord.length;pro++){
                                    playL[pro].classList.add('shows');
                                    playL[pro].textContent=tableauWord[choix].proposoleWord[pro];
                    } 

                    timer.textContent=0;
        kk=0;
        var comptee=setInterval(()=>{
            clearInterval(compte);
            clearInterval(supervisor);
            kk=kk+1;
               timer.textContent=kk;
               if(kk==10){
                  
                            if(mystereWord==tableauWord[choix].wordContent){
                                info.textContent="WIN";
                                scre.style.color="green";
                                scre.style.backgroundColor="green";
                                clearInterval(comptee);
                                info.classList.add('rotation');    
                                //choix=choix+1;
                                play.style.display="block";
                                play.textContent="next";
                                // alert('je suis next');
                                coverPlay.style.zIndex="99";
                                info.textContent="Win!";
                                for(prls=0;prls<tableauWord[choix].proposoleWord.length;prls++){
                                    playL[prls].classList.remove('shows');
                                    playL[prls].textContent=tableauWord[choix].proposoleWord[prls];
                    }  
                                
                            }
                            else{
                                info.classList.add('rotation');
                                info.textContent="LOST";
                                scre.style.color="red";
                                scre.style.backgroundColor="red";
                                clearInterval(comptee);
                                play.style.display="block";
                                play.textContent="replay";
                                choix=choix;
                                coverPlay.style.zIndex="99";
                                info.textContent="You loose!";
                                for(prs=0;prs<tableauWord[choix].proposoleWord.length;prs++){
                                    playL[prs].classList.remove('shows');
                                    playL[prs].textContent=tableauWord[choix].proposoleWord[prs];
                    }  
                               
                            }
               }
               
         },1000);
                    let g=0;
                    let nextInterval=setInterval(()=>{
                clearInterval(supervisor);
                g=g+1;
                if(g==11){
                    info.classList.remove('rotation');
                               }
                // console.log(g);
                // console.log(scre.textContent);
                // console.log(mystereWord);
            },1000);
   }
}


           