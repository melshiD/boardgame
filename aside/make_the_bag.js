// properties are: die-body-color, die-writing-color, number-of-dots, rune-shape, number-value
// white", "black", "one", "circle", "5" 
let svgNS = "http://www.w3.org/2000/svg";
//grab dice container to append to later
let diceContainer = document.querySelector('dice-container');
//grab svg defs tag to append face symbols to
let svgDefsTag = document.getElementById('defs');

for(let [dice, dieIndex] of dice_bag_simple){
    //build div to contain the eventual <use> containing the face declaration
    let thisDie = document.createElement("div");
    thisDie.classList.add("die");
    if(dice[0][0] == 'red'){thisDie.classList.add('red')};
    
    for(let [dieFace, faceIndex] of dice){
        //build symbol to house each item of the face declaraiton
        let svgSymbol = document.createElementNS(svgNS, 'symbol');
        svgSymbol.setAttributeNS(svgNS, 'id', `die${dieIndex}_${faceIndex}`);

        console.log(svgSymbol);
        //build each face

        // WHEN YOU SIT BACK DOWN, BUILD FACE-GENERATING LOGIC.  SHOULD WE BUILD SYMBOLS AND USE THEM, 
        // OR PLACE THE SET OF SYMBOLS DIRECTLY INTO THE RENDERED DIVS IN THE BODY?
        // <symbol id="die1_face1"></symbol>
        // <symbol id="die1_face2"></symbol>
    }

}