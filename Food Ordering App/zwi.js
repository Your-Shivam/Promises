document.addEventListener("DOMContentLoaded", function () {
    const FoodItems = document.querySelectorAll("#FoodItems input");
    const status = document.querySelector("#status");
    const imgcont = document.querySelector("#imgcont");

    const images = [
        {
            name: "Burger",
            url: "https://www.fullerssugarhouse.com/wp-content/uploads/2021/08/maplebaconburger.jpg"
        },
        {
            name: "Pizza",
            url: "https://jvolosy.com/wp-content/uploads/2020/10/1500545587_pizza_fon.jpg"
        },
        {
            name: "Pasta",
            url: "https://www.factsherald.com/wp-content/uploads/2018/04/2.jpeg"
        },
        {
            name: "Salad",
            url: "https://i.pinimg.com/originals/64/41/cd/6441cd67ffc2a6ffda9ba0b0c62aca9c.jpg" 
        },
        {
            name: "Sushi",
            url: "https://4.bp.blogspot.com/-Hjd2D32yiyI/VpF8TVvld-I/AAAAAAAAAN4/cq3vIUUWogA/s1600/sushi_0.jpg" 
        },
    ];

    function createElement(tag, attributes = {}) {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
        return element;
    }

    function renderImage(foodName) {
        const foodImage = images.find(item => item.name === foodName);
        const image = createElement("img", { src: foodImage.url, style: "width: 100%;" });
        imgcont.innerHTML = ""; 
        imgcont.appendChild(image);
    }

    function orderFood() {
        const checkedItems = Array.from(FoodItems).filter(ele => ele.checked);

        if (checkedItems.length === 0) {
            status.innerHTML = "Please select at least one food item.";
            return;
        }

        const foodName = checkedItems[0].value;

        status.innerHTML = "Food is being ordered";

        promiseCreate(foodName)
            .then(response => {
                status.innerHTML = `${response} has been ordered successfully`;
            })
            .catch(error => {
                status.innerHTML = `Error: ${error}`;
            });
    }

    function promiseCreate(foodName) {
        return new Promise((resolve, reject) => {
            const foodOrderTimeout = 2000;

            setTimeout(() => {
                renderImage(foodName);
                resolve(foodName);
            }, foodOrderTimeout);
        });
    }

    document.getElementById("click").addEventListener("click", orderFood);
});