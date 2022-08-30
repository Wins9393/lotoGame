const button = document.querySelector("button");

const chiffre1 = document.getElementById("chiffre1");
const chiffre2 = document.getElementById("chiffre2");
const chiffre3 = document.getElementById("chiffre3");
const chiffre4 = document.getElementById("chiffre4");
const chiffre5 = document.getElementById("chiffre5");



console.log(Math.floor(Math.random() * 20));



const checkResult = (tab) => {
    let bonneReponse = 0;

    for(let i = 0; i <= 4; i++) {
        if(tab[i] == chiffre1.value){
            bonneReponse++;
        }
        if(tab[i] == chiffre2.value){
            bonneReponse++;
        }
        if(tab[i] == chiffre3.value){
            bonneReponse++;
        }
        if(tab[i] == chiffre4.value){
            bonneReponse++;
        }
        if(tab[i] == chiffre5.value){
            bonneReponse++;
        }
    };
    showResult(tab, bonneReponse);
}


const getRandomInt = () => {
    let randomTab = new Set();

    while(randomTab.size <= 4){
        let randomInt = Math.floor(Math.random() * 20);

        randomTab.add(randomInt);
    }

    randomTab = [...randomTab];

    checkResult(randomTab);
}


const showResult = (tab, bonneReponse) => {
    const div = document.getElementById("div");

    const tab1 = tab[0];
    const tab2 = tab[1];
    const tab3 = tab[2];
    const tab4 = tab[3];
    const tab5 = tab[4];

    const pTab = document.createElement("p");
    pTab.setAttribute("class", "numerosGagnants");

    pTab.append(tab1+' - ', tab2+' - ', tab3+' - ', tab4+' - ', tab5);

    div.innerHTML="";
    div.append(pTab);

    const result = document.getElementById("bonnesReponses");

    if(bonneReponse == 5){
        result.setAttribute("class", "numerosGagnants");
        result.innerHTML = `Félicitations !! Vous avez gagnez le gros lot !!`;
    }else{
        result.removeAttribute("class", "numerosGagnants");
        result.innerHTML = `Vous avez <span id="bonNum">${bonneReponse}</span> bon(s) numéro(s)`;
    }
    console.log(bonneReponse);
}


button.addEventListener("click", () => {
    getRandomInt();
})

