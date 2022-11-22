class Carousel {

    currentItem = 0;

    constructor (itemArray, controllerId) {
        this.arrayLength = itemArray.length;
        this.itemArray = itemArray;
        this.controllerId = controllerId;
        this.renderController();
        this.render();
    };

    render() {
        let id = this.currentItem === 0 ? this.arrayLength-1 : this.currentItem-1;
        console.log(id);
        document.getElementById("carouselImage1").style.backgroundImage = `url("img/${this.itemArray[id]}")`;
        document.getElementById("carouselImage2").style.backgroundImage = `url("img/${this.itemArray[this.currentItem]}")`;
        id = this.currentItem === this.arrayLength-1 ? 0 : this.currentItem+1;
        document.getElementById("carouselImage3").style.backgroundImage = `url("img/${this.itemArray[id]}")`;
    };

    nextImg() {
        if (this.currentItem < this.arrayLength-1) {
            this.currentItem += 1;
        } else {
            this.currentItem = 0;
        };
        this.render();
    };

    prevImg() {
        if (this.currentItem !== 0) {
            this.currentItem -= 1;
        } else {
            this.currentItem = this.arrayLength -1;
        };
        this.render();
    };

    renderController() {
        const element = document.getElementById(this.controllerId);
        element.innerHTML = `
        <button class="carouselButton" id="next">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
        </button>
        <button class="carouselButton" id="prev">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
        </button>
        `;
        document.getElementById("prev").addEventListener("click", () => {this.prevImg()});
        document.getElementById("next").addEventListener("click", () => {this.nextImg()});
    };

    
};

function selectMountain1() {
    document.getElementById("mountain1").classList.add('active');
    document.getElementById("mountain2").classList.remove('active');
    document.getElementById("section3").style.backgroundImage = 'url("img/tab1.png")';
    document.getElementById("schedule").innerHTML = `
        <p>12/20/2020</p>
        <p>Lorem ipsum</p>
        <p>11/20/2020</p>
        <p>Lorem ipsum</p>
        <p>10/15/2021</p>
        <p>Lorem ipsum</p>
    `;
}

function selectMountain2() {
    document.getElementById("mountain2").classList.add('active');
    document.getElementById("mountain1").classList.remove('active');
    document.getElementById("section3").style.backgroundImage = 'url("img/tab2.png")';
    document.getElementById("schedule").innerHTML = `
        <p>11/7/2019</p>
        <p>Inventore rerum</p>
        <p>8/9/2020</p>
        <p>Inventore rerum</p>
        <p>9/15/2022</p>
        <p>Inventore rerum</p>
        <p>9/18/2022</p>
        <p>Inventore rerum</p>
    `;
}

function toggleMenu1() {
    const element = document.getElementById("menu1")
    if (element.classList.contains('activated1')) {
        element.classList.remove('activated1');
    } else {
        element.classList.add('activated1');
    };
};

function toggleMenu2() {
    const element = document.getElementById("menu2")
    if (element.classList.contains('activated2')) {
        element.classList.remove('activated2');
    } else {
        element.classList.add('activated2');
    };
};