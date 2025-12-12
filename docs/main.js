/*let intro= document.getElementById("intro")
intro.innerHTML = "Nouveau texte !"

let image=document.getElementById("image")
image.src="papillon.jpg"

/*function changerImage() {
    image.src="image2.jpg"
}*/

/*image.addEventListener("click", function changerImage() {
    image.src="image2.jpg"
})/*changer image au click*/

/*intro.addEventListener('mouseenter', function(){
    this.classList.toggle('red')
}
)

intro.addEventListener('mouseleave', function(){
    this.classList.toggle('black')
})/*change couleur texte avec souris*/

/*pour changer drakmode ettre blue mode a la place*/

let btn=document.getElementById("btnMode")
btn.addEventListener('click', function(){
     
    let btn=document.getElementById("btnMode")
    btn.classList.toggle('blueb1')

    let bandeau=document.getElementById("bandeauH")
    bandeau.classList.toggle('blueb2')

    let texteH=document.getElementById("homeH")
    texteH.classList.toggle('bluet1')

    let titleH=document.getElementById("titleH")
    titleH.classList.toggle('bluet2')

    let soustitle=document.getElementById("soustitle")
    soustitle.classList.toggle('bluet2')

    let bouton1=document.getElementById("bouton1")
    bouton1.classList.toggle('blueb1') 

    let intro=document.getElementById("intro")
    intro.classList.toggle('bluet1')

    let intro1=document.getElementById("intro1")
    intro1.classList.toggle('bluet1') 

    let intro2=document.getElementById("intro2")
    intro2.classList.toggle('bluet1') 

    let bloc1=document.getElementById("bloc1")
    bloc1.classList.toggle('blueb1')

    let muse=document.getElementById("muse")
    muse.classList.toggle('blueb1')

    let cartes=document.getElementById("cartes")
    cartes.classList.toggle('bluet2')

    let bloc2=document.getElementById("bloc2")
    bloc2.classList.toggle('blueb2')

    let bloc3=document.getElementById("bloc3")
    bloc3.classList.toggle('blueb2')

    let bouton2=document.getElementById("bouton2")
    bouton2.classList.toggle('blueb1')

    let bastexte=document.getElementById("bastexte")
    bastexte.classList.toggle('bluet1') 

    let basfond=document.getElementById("basfond")
    basfond.classList.toggle('blueb1')

    let contact=document.getElementById("contact")
    contact.classList.toggle('blueb1')

    let liens=document.getElementById("liens")
    liens.classList.toggle('blueb2')

    let barreb=document.getElementById("barreb")
    barreb.classList.toggle('blueb2')
})
  

let burger=document.getElementById("burger") 
burger.addEventListener('click', function(){
    /*tiré de W3school*/
    let liens= document.getElementById("liens");
    if (liens.style.display == "block") {
        liens.style.display = "none";
        
    } else {
        liens.style.display = "block";
    }
}) 
