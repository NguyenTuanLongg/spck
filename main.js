array = [
    {
        img: "img/img4.jpg",
        p : "Nếu muốn có được sự hạnh phúc trong tình yêu thì bạn hãy học cách thông cảm, cho đi và yêu thương nhiều hơn."
    },
    {
        img: "img/img5.jpg",
        p : "Nếu hỏi điều gì trong cuộc sống này khiến tôi hạnh phúc nhất thì anh sẽ là món quà vô giá nhất.v"
    },
    {
        img: "img/img6.png",
        p : "Nếu muốn có được sự hạnh phúc trong tình yêu thì bạn hãy học cách thông cảm, cho đi và yêu thương nhiều hơn."
    },
    {
        img: "img/img7.jpg",
        p : "Hạnh phúc trong tình yêu không phải những điều to lớn mà là cùng nhau nỗ lực vì những điều nhỏ nhặt nhất."
    },
]


let showStories = (data) => {
    let stories = document.querySelector(".part3")
    if (stories != []) {
        for (let item of data) {
            stories.innerHTML += `
                <div class="story">
                    <img src=${item.img} alt="">
                    <div class="piece">
                        <p>${item.p}</p>
                    </div>
                </div>`
        }
    }
}
showStories(array)

listArrProduct = [
    {
        img : "img/product0.jpg", 
        h3: "Set 2 Black",
        p : "Gía: 420.000vnđ"
    },
    {
        img : "img/img2.webp", 
        h3: "Set 3 red",
        p : "Gía: 290.000vnđ"
    },
    {
        img : "img/img2.webp", 
        h3: "Set 3 red",
        p : "Gía: 290.000vnđ"
    },
]
let showStories1 = (data) => {
    let stories = document.querySelector(".main-product")
    if (stories != []) {
        for (let item of data) {
            stories.innerHTML += `
            <div class="product">
                <a href=""><img src=${item.img} alt=""></a>
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
            </div>`
        }
    }
}
showStories1(listArrProduct)