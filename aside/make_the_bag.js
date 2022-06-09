// properties are: 0:die-body-color, 1:die-shape-stroke-color, 2:number-of-dots, 3:rune-shape, 4:number-value
// white", "black", "one", "circle", "5" 

let svgNS = "http://www.w3.org/2000/svg";
let faceSymbolsByDie = [];

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

    //make an array organized with symbol id's for each face, along with the die's color 
    let theseSixFaces = [die[0][0]];
    die.forEach((face, faceIndex) => {
        let svgFaceSymbol = document.createElementNS("http://www.w3.org/2000/svg", 'symbol');
        let faceSymbolID = `die${dieIndex}_face${faceIndex}`;
        svgFaceSymbol.setAttributeNS("http://www.w3.org/2000/svg", 'id', faceSymbolID);

        theseSixFaces.push(faceSymbolID);

        //check properties of each face and include required <use> tags in symbol
        //only the shape need be black/red, dots are always black here
        if(face[3] != 'none'){
            let shapeUseTag = document.createElementNS("http://www.w3.org/2000/svg", 'use');
            shapeUseTag.setAttributeNS("http://www.w3.org/2000/svg", 'href', `#${face[3]}`);
            shapeUseTag.setAttributeNS("http://www.w3.org/2000/svg", 'stroke', `${face[1]}`)
            svgFaceSymbol.appendChild(shapeUseTag);
        }
        if(face[2] != 'none'){
            let dotsUseTag = document.createElementNS("http://www.w3.org/2000/svg", 'use');
            dotsUseTag.setAttributeNS("http://www.w3.org/2000/svg", 'href', `#dots-${face[2]}`);
            svgFaceSymbol.appendChild(dotsUseTag);
        }
        if(face[4] != ''){
            let valueUseTag = document.createElementNS("http://www.w3.org/2000/svg", 'use');
            valueUseTag.setAttributeNS("http://www.w3.org/2000/svg", 'href', `#value-${face[4]}`);
            svgFaceSymbol.appendChild(valueUseTag);
        }
        svgDefsTag.appendChild(svgFaceSymbol);
        // useFaceAndAppendToDieDiv(faceSymbolID, faceIndex, thisDieDiv);
        // thisDieDiv.appendChild(usableFaceDiv);
    });
    faceSymbolsByDie.push(theseSixFaces);
});
