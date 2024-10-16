
const prompt = require('prompt-sync')();

let choix = "";




    while (choix !== 'a' && choix !== 'b') {
        choix = prompt("Tu viens d'être transporté à Poudlard, et en arrivant, tu tombes directement sur un Détraqueur. Tu réalises que tu as ta baguette magique : deux choix s'offrent à toi : \nCHOIX 1 : appuie sur 'a' si tu veux l'affronter avec un Patronus \nCHOIX 2 : appuie sur 'b' si tu veux fuir : ");
    }

    if (choix == "a") {
        console.log("Tu réussis à repousser le Détraqueur avec un Patronus, mais tu perds beaucoup d'énergie.");
       
     

     
        while (choix !== 'c' && choix !== 'd') {
            choix = prompt("Tu décides de continuer et sur ton chemin tu tombes sur un coffre enchanté :\nCHOIX 1 : appuie sur 'c' pour l'ouvrir. \nCHOIX 2 : appuie sur 'd' pour le laisser fermé : ");
        }

        if (choix == "c") {
            console.log("Le coffre était piégé, tu perds des points pour ta maison.");
           
          

           
            while (choix !== 'e' && choix !== 'f') {
                choix = prompt("Tu arrives devant une porte mystérieuse qui semble protéger quelque chose de précieux :\nCHOIX 1 : appuie sur 'e' pour entrer \nCHOIX 2 : appuie sur 'f' pour ignorer la porte : ");
            }

            if (choix == "e") {
                console.log("Tu trouves une fiole de Felix Felicis, ce qui te donne un bonus pour tes prochaines actions !");
              

                while (choix !== 'g' && choix !== 'h') {
                    choix = prompt("Tu entends un bruit étrange venant de derrière un rideau. Veux-tu enquêter ?\nCHOIX 1 : appuie sur 'g' pour vérifier \nCHOIX 2 : appuie sur 'h' pour ignorer : ");
                }

                if (choix == "g") {
                    console.log("Tu découvres un petit elfe de maison caché qui avait peur. Il te remercie et t'offre un sort de protection.");
                   
                } else {
                    console.log("Tu ignores le bruit et continues ton chemin, te demandant ce que c'était.");
                  
                   
                }
            } else {
                console.log("Tu choisis d'ignorer la porte et tu continues ton chemin.");
            }
        } else {
            console.log("Tu laisses le coffre fermé et tu le contournes.");
           
           
        }
    } else {
        console.log("Tu t'enfuis rapidement et, par chance, tu échappes au Détraqueur sans encombre.");
       
     
    }




   
        
    
    while (choix !== 'l' && choix !== 'm' ) {
        choix = prompt("Te voilà dans une autre salle, et un élève de Serdaigle s'approche de toi et te demande de l'aide pour trouver sa baguette : \nCHOIX 1 : appuie sur 'l' pour l'aider . \nCHOIX 2 : appuie sur 'm' pour l'abandonner a son sort ici : ");
    }

    if (choix == "l") {
        console.log("L'élève est reconnaissant et te donne des remerciements.");
       
      

        
        while (choix !== 'o' && choix !== 'p') {
            choix = prompt("En avançant, vous tombez sur une épreuve de logique mise en place par le professeur Rogue :\nCHOIX 1 : appuie sur 'o' pour tenter de résoudre l'énigme \nCHOIX 2 : appuie sur 'p' pour chercher un autre chemin : ");
        }

        if (choix == "o") {
            console.log("Tu réussis l'épreuve, ce qui te permet de récupérer un artefact magique précieux.");
            

           
            while (choix !== 'q' && choix !== 'r') {
                choix = prompt("En explorant davantage, tu rencontres un tableau animé qui te pose une question : \nQui est le directeur de Poudlard pendant la majorité de la scolarité de Harry Potter ? \nCHOIX 1 : 'q' pour Albus Dumbledore \nCHOIX 2 : 'r' pour Severus Rogue : ");
            }

            if (choix == "q") {
                console.log("Bonne réponse ! Le tableau te laisse passer.");
              
             

               
                while (choix !== 's' && choix !== 't') {
                    choix = prompt("Tu entres dans une salle secrète et tu découvres un Portoloin. Voulez-vous l'utiliser ? \nCHOIX 1 : 's' pour l'utiliser \nCHOIX 2 : 't' pour l'ignorer : ");
                }

                if (choix == "s") {
                    console.log("Le Portoloin t'amène dans la Forêt Interdite. Tu perds du temps, mais tu continues à explorer.");
                   
                   

                  
                    while (choix !== 'u' && choix !== 'v') {
                        choix = prompt("Dans la forêt, tu tombes sur une licorne blessée. Veux-tu l'aider ? \nCHOIX 1 : 'u' pour l'aider \nCHOIX 2 : appuie sur 'v' pour la laisser : ");
                    }

                    if (choix == "u") {
                        console.log("Tu aides la licorne, qui te remercie en te donnant un peu de sa magie. Tu gagnes des points pour ta maison.");
                      
                    } else {
                        console.log("Tu choisis de laisser la licorne et continues ton chemin, mais tu ressens une légère culpabilité.");
                      
                        
                    }
                } else {
                    console.log("Tu choisis d'ignorer le Portoloin et continues ton exploration.");
                    
                 
                }
            } else {
                console.log("Mauvaise réponse ! Le tableau te punit.");
               
              
            }

        } else {
            console.log("Tu choisis de contourner l'épreuve et perds un peu de temps, mais continues sans encombre.");
           
            
        }
    } else {
        console.log("Tu laisses l'élève ici et décides de te frayer un chemin vers la salle suivante.");
        
        
    }

    


console.log("Fin de la partie.");
