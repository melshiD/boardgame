// properties are: 0:die-body-color, 1:die-shape-stroke-color, 2:number-of-dots, 3:rune-shape, 4:number-value
// white", "black", "one", "circle", "5" 

let svgNS = "http://www.w3.org/2000/svg";

//grab dice container to append to later
let diceContainer = document.querySelector('.dice-container');
console.log(diceContainer);

//grab svg defs tag to append face symbols to
let svgDefsTag = document.getElementById('defs');

//for each element in dice_bag array (being a 6-element array itself),
//build <use> tags for each face, and append use tags into a symbol tag with
//a serialized name
dice_bag_simple.forEach((die, dieIndex) => {

    //make div to house all 6 faces of current die
    let thisDieDiv = document.createElement('div');
    thisDieDiv.setAttribute('class', 'die');
    thisDieDiv.setAttribute('id', `die_${dieIndex}`);

    die.forEach((face, faceIndex) => {
        let svgFaceSymbol = document.createElementNS(svgNS, 'symbol');
        let faceSymbolID = `die${dieIndex}_face${faceIndex}`;
        svgFaceSymbol.setAttributeNS(svgNS, 'id', faceSymbolID);

        //check properties of each face and include required <use> tags in symbol
        //only the shape need be black/red, dots are always black here
        if(face[3] != 'none'){
            let shapeUseTag = document.createElementNS(svgNS, 'use');
            shapeUseTag.setAttributeNS(svgNS, 'href', `#${face[3]}`);
            shapeUseTag.setAttributeNS(svgNS, 'stroke', `${face[1]}`)
            svgFaceSymbol.appendChild(shapeUseTag);
        }
        if(face[2] != 'none'){
            let dotsUseTag = document.createElementNS(svgNS, 'use');
            dotsUseTag.setAttributeNS(svgNS, 'href', `#dots-${face[2]}`);
            svgFaceSymbol.appendChild(dotsUseTag);
        }
        if(face[4] != ''){
            let valueUseTag = document.createElementNS(svgNS, 'use');
            valueUseTag.setAttributeNS(svgNS, 'href', `value-${face[4]}`);
            svgFaceSymbol.appendChild(valueUseTag);
        }
        svgDefsTag.appendChild(svgFaceSymbol);
        thisDieDiv.appendChild(useFaceAndAppendToDieDiv(faceSymbolID, faceIndex));
        // console.log(thisDieDiv);
    });
    console.log(thisDieDiv);
    diceContainer.appendChild(thisDieDiv);
});


function useFaceAndAppendToDieDiv(faceSymbolID, faceIndex){
    //make die face div
    let faceDiv = document.createElement('div');
    faceDiv.setAttribute('class', `die-face face-${faceIndex}`);

    //make svg tag
    let svgTag = document.createElementNS(svgNS, 'svg');
    svgTag.setAttributeNS(svgNS, 'viewBox', '0 0 200 200');

    //make use tag and set href to faceSymbolID
    let useTag = document.createElementNS(svgNS, 'use');
    useTag.setAttributeNS(svgNS, 'href', `#${faceSymbolID}`);

    //make appropriate appendations (real word?)
    svgTag.appendChild(useTag);
    faceDiv.appendChild(svgTag);
    return faceDiv;

}
//now all the face symbol definitions have been built, so build the die 
//and append them to the container
