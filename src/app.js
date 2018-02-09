import '../styles/app.css';
import {myList} from "./appLoader";
import {NumberGenerator} from './numberGenerator';

function addListItem() {
    var node = document.createElement("LI");
    var number = NumberGenerator.getNumber(100);
    var textnode = document.createTextNode("New LI: " + number);
    node.appendChild(textnode);

    myList.appendChild(node);
}

addListItem();
addListItem();
addListItem();
addListItem();
