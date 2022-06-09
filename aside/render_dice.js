let diceContainer = document.querySelector('.dice-container');

document.addEventListener('onclick', renderDice(faceSymbolsByDie));

function renderDice(faceSymbols){
    faceSymbols.forEach(die => {

        let thisDie = document.createElement('div');
        thisDie.setAttribute('class', `${die[0] == 'red' ? 'die red' : 'die'}`);
    
        die.slice(1,7).forEach((faceSymbolID, faceIndex) => {
            //make die face div
            let faceDiv = document.createElement('div');
            faceDiv.setAttribute('class', `die-face face-${faceIndex}`);
    
            //make svg tag
            let svgTag = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            // svgTag.setAttributeNS("http://www.w3.org/2000/svg", 'viewBox', '0 0 200 200');
            svgTag.setAttribute('viewBox', '0 0 200 200');
    
            //make use tag and set href to faceSymbolID
            let useTag = document.createElementNS("http://www.w3.org/2000/svg", 'use');
            // useTag.setAttributeNS("http://www.w3.org/2000/svg", 'href', `#${faceSymbolID}`);
            useTag.setAttribute('href', `#${faceSymbolID}`);
    
            //make appropriate appendations
            svgTag.appendChild(useTag);
            faceDiv.appendChild(svgTag);
            // return faceDiv;
            thisDie.appendChild(faceDiv);
        });
        diceContainer.appendChild(thisDie);
    });
}

