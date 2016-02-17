/*! Upload.js */

import "babel-polyfill";
import { autobind } from "core-decorators";

const supportedTypes = /image.*/;

function logNames(files) {
    const fileArray = Array.from(files);

    fileArray.forEach(file => console.log(file.name));
}

class Upload extends HTMLInputElement {

    createdCallback() {
        this.type = "file";

        this.addEventListener("change", () => this.examineFile(this.files[0]));
    }

    @autobind
    examineFile(file) {
        const { type = ""} = file;

        if (!type.match(supportedTypes)) {
            alert(`${ type } not a supported image type`);
            return;
        }

        return this.readFile(file);
    }

    readFile(file) {
        const { name, type } = file;
        console.log(`reading file ${ name } of type ${ type }`);

        const reader = new FileReader();

        reader.onload = () => this.displayImageResult(reader.result);
        reader.readAsDataURL(file);
    }

    @autobind
    displayImageResult(result) {
        const container = this.getFileDisplayContainer();
        container.innerHTML = "";

        var image = new Image();
        image.src = result;

        container.appendChild(image);
    }

    getFileDisplayContainer() {
        return document.getElementsByClassName("image-upload-result")[0];
    }

}

document.registerElement("image-upload", {
    prototype: Upload.prototype,
    extends: "input"
});
