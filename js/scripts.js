window.addEventListener("load", function(){
const firstH1OnPage = document.querySelector("h1");
firstH1OnPage.remove();

const body = document.querySelector("body");
console.log(body);

const newHeading = document.createElement("h1");
newHeading.append("Website Recreation Practice");

const newP = document.createElement("p");
newP.append("The HTML of this webpage was created with JavaScript.")


const newImg = document.createElement("img");
newImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
newImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
newImg.setAttribute("width", "50%");

const newH1 = document.createElement("h1");
newH1.append("Facts about the Multicolored Tanager");

const uList = document.createElement("ul");
const firstLi = document.createElement("li");
firstLi.append("It is endemic to the mountains of Colombia");
uList.prepend(firstLi);

const secondLi = document.createElement("li");
secondLi.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
firstLi.after(secondLi);

const newH2 = document.createElement("h2");
newH2.append("Source");

const link = document.createElement("a");
link.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
link.append("Wikipedia");

body.append(newHeading);
body.append(newP);
body.append(newImg);
body.append(newH1);
body.append(uList);
body.append(newH2);
body.append(link);


});