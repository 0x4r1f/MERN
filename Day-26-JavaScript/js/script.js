// document.getElementById("siamPenter");

// const siamPenter = document.getElementById("siamPenter");

const siamPenter = document.querySelector("#siamPenter");

document.querySelector("h1").innerText = "Demo";

siamPenter.innerHTML = "Siam printer is ready!";

// document.querySelector(".sazzad").innerHTML = "hello";

const sazzadElements = document.querySelectorAll(".sazzad");

sazzadElements[1].textContent = "Sazzad is here!"

// console.log(sazzadElements);

const cityList = document.getElementById("cityList"); 

// console.log(cityList);

cityList.children[0].textContent = "Dhaka";
cityList.children[1].textContent = "Khulna";
cityList.children[2].textContent = "Comilla";
cityList.children[3].textContent = "Rajshahi";
cityList.children[4].textContent = "Sylhet"; 

console.log(cityList.children);
console.log(cityList.childNodes);

cityList.childNodes.forEach((data) => {
    if (data.nodeType == Node.ELEMENT_NODE) {
        console.log(data.textContent);
    }
})

Array.from(cityList.children).forEach((data) => {
    console.log(data.textContent);
});

console.log(cityList.nextSibling);
console.log(cityList.nextElementSibling);
console.log(cityList.previousSibling);
console.log(cityList.previousElementSibling);
console.log(cityList.firstChild);
console.log(cityList.firstElementChild);
console.log(cityList.lastChild);
console.log(cityList.lastElementChild);
console.log(cityList.parentNode);
console.log(cityList.parentElement);

// console.log(document);