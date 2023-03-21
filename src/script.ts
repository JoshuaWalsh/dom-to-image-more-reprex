import domtoimage from 'dom-to-image-more';

const statusElm = document.getElementById("status") as HTMLDivElement;
const inputElm = document.getElementById("inputDom") as HTMLDivElement;
const outputElm = document.getElementById("outputImage") as HTMLImageElement;
const bounding = inputElm.getBoundingClientRect();

domtoimage.toPng(inputElm, {
    quality: 100,
    width: bounding.width + 1,
    height: bounding.height + 1,
}).then((res) => {
    outputElm.src = res;
    statusElm.innerText = "Completed!";
});