<template>
    <div class="wrapper">
        <header class="header-block">
            <div class="hearder-title">
                <h1>Internet Shop</h1>
            </div>
            <div class="menu-top">
                <form action="#" class="search">
                    <input class="search-input" type="search" name="q" placeholder="Поиск">
                    <button class="search-button" type="button">Найти</button>
                        <!-- <input class="search-button" type="submit" value="Найти"></p> -->
                </form>

                <button class="cart-button" type="button">Корзина</button>

                <!-- <a href="#"><img src="img/shopping-cart1.png" alt="contacts"></a> -->
            </div>
        </header>

        <div class="content">
            <div class="container">
                <div class="catalog-block">
                    <div class="catalog-title">Каталог</div>
                    <div class="catalog di-flex">

                        <div class="good item-catalog" v-for="item in goodList" :key="item.id_product">
                            <img src="#" alt="Photo" height="120" winght="120" class="image">
                            <div>
                                <div><b>Наименование</b>: {{item.product_name}}</div>
                                <div><b>Цена за штуку</b>: {{item.price}}</div>
                                <button class="addToBasket-btn" data-id_product="${this.good.id_product}">Добавить в корзину</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="cart-block">
                    <div class="cart-title">Корзина</div>
                    <div class="cart-list di-flex"></div>
                    <button class="cart-btn">очистить корзину</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
export default {
    name: 'E-shop',
    data: () => ({
        good: [],
        goodList: [],
    }),
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`);
    },
    methods: {
        // makeGETRequest1(url, callback) {
        //     let xhr;

        //     let p = new Promise((resolve, reject) => {
        //         if (window.XMLHttpRequest) {
        //             xhr = new XMLHttpRequest();
        //         } else if (window.ActiveXObject) {
        //             // xhr = new ActiveXObject("Microsoft.XMLHTTP");
        //         }

        //         xhr.open('GET', url, true);
        //         xhr.send();
        //         resolve();
        //     });

        //     p.then(() => {
        //         xhr.onreadystatechange = function () {
        //             if (xhr.readyState === 4) {
        //                 callback(xhr.responseText);
        //             }
        //         }
        //     });
        // },

        makeGETRequest (url) {
            fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    this.good = data;
                    this.goodList = data;
                })
        },
    },
}
</script>









<style>
* {
    margin: 0;
    padding: 0;
}

.wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: auto;
}

.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 0 16px;
}

.header-block {
    background-color: beige;
    /* margin: 0 auto;
    width: 100vh; */
}

.hearder-title {
    margin: 0 16px;
}

.menu-top {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
}

.search-button { 
    font-size: 16px;
    margin: 5px;
}

.good {
    border: 1px solid #000;
    margin-bottom: 5px;
    background: whitesmoke;    
}

.item-catalog {
    margin: 0 2px 5px;
    flex: auto;
    max-width: 200px;
    min-width: 120px;
    display: flex;
    flex-direction: column;
}

.cart-list {
    flex-direction: column;
}

.container{
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.di-flex {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}

footer {
    /* color: black; */
    background-color: rgb(199, 170, 131);
    margin-top: 46px;
}

/* .footer {
    margin: 0 auto;
    align-self: center;
    width: 100vh;
} */

.notice {
    margin: 24px 24px 0 24px;
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
}

</style>