function motLePlusLong (phrase) {
let mot = phrase.split(' ')
let caractere =[]
for(let i=0; i< mot.length ; i++){
    // on cree un tableau qui contient le nombre de caractere de chaque mot dans la phrase
    caractere.push(mot[i].length)
}
//(...caractere)   decompose le tableau pour recuperer seulement les valeurs dedans 
let long = Math.max(...caractere)
let index = caractere.indexOf(long)
// on recupere le mot le plus long a partir de cette index 
console.log(`Le mot le plus long est ${mot[index]}`)
}

let string = 'Je fais un test'
console.log(motLePlusLong(string))