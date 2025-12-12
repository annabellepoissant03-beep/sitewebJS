//onsole.log('Hello world !')

//let prénom="Annabelle"
//console.log(prénom)

//let age="18"
//console.log('Je m appelle ' + prénom +' et j ai ' + age+ ' ans')

//let Sara= "Sara"
//function Helloworld(Sara) {
    //return console.log("Bonjour " + Sara)
//}
//Helloworld(Sara)


//let a=3
//let b=4
//let somme = addition(a,b)
//function addition (number1, number2) {
    //return (number1 + number2)
//}
//console.log(addition(a,b))

//for(let compte=1; compte < 6; compte++ ) {
   // console.log(compte)
   // }


//let mot=prompt("choisi un mot")
//for(let i=0; i< 5; i+=1){
    //console.log(mot)
//}

//ex café

//let prixCafe=1.45
//let eau=800
//let cafe=100
//let argent=0
//let nbClient=16
//let clientRestant=16
//let clientServis=0

//for(let client=1; client < nbClient; client++ ) {
    //if (eau < 60)
        //break;

   // if (cafe < 8)
        //break;


    //console.log("Préparation du café n°"+client)
    //console.log("Café distribué !")
    //eau-= 60
    //cafe-=8
    //argent+= prixCafe
    //clientRestant--
    //clientServis++

    //console.log("Eau restant : "+eau +"ml, Café restant : "+cafe +"g, Argent gagné : "+argent +"€")

//}

//console.log("Nombre de café distribuer : "+ clientServis )
//console.log("Client non servis : " + clientRestant)
//console.log("Eau restante : "+eau)
//console.log("Café moulu restant : "+cafe) 
//console.log("Argent gagné : "+argent)

console.log("simulateur de combat")

let lion={
    nom:'lion',
    precision:0.2,
    attaque:45,
    vie:150
}

let homme={
    nom:'combattant',
    precision:0.7,
    attaque:20,
    vie:100
}

let victoire = 0

function attaquerLion (lion,homme){
    return(lion.vie-= homme.attaque)
}

function precisionLion (lion){
    return Math.random()
}


function attaquerHomme (homme,lion){
    return(homme.vie-= lion.attaque)
}

function precisionHomme (homme){
    return Math.random()
}

console.log("Le combat commence")
    console.log(homme.nom+ " : Points vie restants "+homme.vie)
    console.log(lion.nom+ " : Points vie restants "+lion.vie)

//boucle de jeu
while(victoire== 0){
    
    //tour du lion
    let precisionL = precisionLion(lion)

    if(precisionL < lion.precision){
        // ca touche
        console.log("Le " +lion.nom+ " touche sa cible")
        console.log(precisionL)

        attaquerHomme(homme,lion)

        console.log(homme.nom+ " : Points vie restants "+homme.vie)

        if(homme.vie <= 0){
            //le homme est mort
            console.log("Victoire du " +lion.nom+" !")
            victoire++
            break
        }

    }else{
        // il manque
        console.log("Le " +lion.nom+ " manque sa cible")
        console.log(precisionL)
    }

    //tour du homme
    let precisionH = precisionHomme(homme)

    if(precisionH < homme.precision){
        // ca touche
        console.log("Le " +homme.nom+ " touche sa cible")
        console.log(precisionH)

        attaquerLion(lion,homme)

        console.log(lion.nom+ " : Points vie restants "+lion.vie)

        if(lion.vie <= 0){
            //le lion est mort
            console.log("Victoire du " +homme.nom+ " !")
            victoire++
            break
        }
            
        
    }else{
        console.log("Le " +homme.nom+ " manque sa cible")
        console.log(precisionH)
    }
    
}

