listArrProduct = [
    {
        img : "img/set1-black.webp", 
        h3: "Set 1 Black",
        p : "Gía: 290.000vnđ",
        a : "detail-product1.html"
    },
    {
        img : "img/set1-red.webp", 
        h3: "Set 1 red",
        p : "Gía: 290.000vnđ",
        a : "detail-product2.html"
    },
    {
        img : "img/set2-black.webp", 
        h3: "Set 2 black",
        p : "Gía: 420.000vnđ",
        a : "detail-product3.html"
    },
    {
        img : "img/set3-black.webp" , 
        h3: "Set 3 Black",
        p : "Gía: 420.000vnđ", 
        a : "detail-product4.html"
    },
    {
        img : "img/set3-red.webp", 
        h3: "Set 3 red",
        p : "Gía: 290.000vnđ",
        a : "detail-product5.html"
    },
    {
        img : "img/set3-red.webp", 
        h3: "Set 3 black",
        p : "Gía: 290.000vnđ",
        a : "detail-product6.html"
    },
]

let showProduct1 = (data) => {
    let stories = document.querySelector(".list")
    if (stories != []) {
        for (let item of data) {
            stories.innerHTML += `
            <div class="product">
                <a href=${item.a}><img src=${item.img} alt="">
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
                </a>
            </div>`
        }
    }
}
showProduct1(listArrProduct)

listArrProduct2 = [
    {
        img : "img/set6.webp", 
        h3: "Set 6",
        p : "Gía: 620.000vnđ",
        a : "detail2-product1.html"
    },
    {
        img : "img/set7.webp", 
        h3: "Set 7",
        p : "Gía: 420.000vnđ",
        a: "detail2-product2.html"
    },
    {
        img : "img/set7g.webp", 
        h3: "Set 7G",
        p : "Gía: 390.000vnđ",
        a : "detail2-product3.html"
    },
    {
        img : "img/set8.webp" , 
        h3: "Set 8",
        p : "Gía: 520.000vnđ",
        a : "detail2-product4.html"
    },
    {
        img : "img/set9.webp", 
        h3: "Set 9 Pink",
        p : "Gía: 295.000vnđ",
        a : "detail2-product5.html"
    },
    {
        img : "img/set10.webp", 
        h3: "Set 9 Yellow",
        p : "Gía: 295.000vnđ", 
        a : "detail2-product.html"
    },
]

let showProduct2 = (data) => {
    let stories = document.querySelector(".list2")
    if (stories != []) {
        for (let item of data) {
            stories.innerHTML += `
            <div class="product">
                <a href=${item.a}><img src=${item.img} alt=""></a>
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
            </div>`
        }
    }
}
showProduct2(listArrProduct2)



let newProduct = JSON.parse(localStorage.getItem("product"));
if(newProduct == null) {
    localStorage.setItem("product",JSON.stringify(listArrProduct2))
}
const addPro = () =>{
    let img = document.querySelector(".img").value;
    let name = document.querySelector(".name").value;
    let price = document.querySelector(".price").value;
    let newa = {
        id : newProduct.length+1,
        img : img , 
        name : name ,
        price : price
    }
    newProduct.push(newa)
    console.log(newProduct);
    localStorage.setItem("product",JSON.stringify(newProduct))
    window.location.href = "product.html";
    }
    console.log(newProduct);
    let formProduct = document.querySelector("#addProduct");
    if(formProduct) {
        formProduct.addEventListener("submit", (e)=>{
            e.preventDefault();
            addPro()
        })
    }