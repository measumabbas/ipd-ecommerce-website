console.log('This is IPD project');

// Handling switch between login and sign up

const signUpForm = `<div class="input">
                    <input type="text" placeholder="User Name">
                    </div>
                    <div class="input">
                    <input type="email" placeholder="Email">
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Password">
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Repeat password">
                    </div>
                    <div class="input">
                    <input type="submit" value="Register">
                    </div>`;


const LoginForm = `<div class="input">
                    <input type="text" placeholder="User Name">
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Password">
                    </div>
                    <div class="input">
                    <input type="submit" value="Sign In">
                    </div>`;

// Selecting Sign up and login buttons

const logIn = document.querySelector('#login');
const signUp = document.querySelector('#signup');
const form = document.querySelector('.form');
const loginBtn = document.querySelector('#login-btn');
const loginModal = document.querySelector('.login');
const loginContainer = document.querySelector('.login-container');

console.log(logIn, signUp, form);

logIn.addEventListener('click', () => {
    form.innerHTML = LoginForm;
    signUp.classList.add('login-back-color');
    logIn.classList.remove('login-back-color');
    
});

signUp.addEventListener('click', () => {
    form.innerHTML = signUpForm;
    logIn.classList.add('login-back-color');
    signUp.classList.remove('login-back-color');
});

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    console.log('clicked');
});

document.getElementById('user').addEventListener('click',()=>{
    loginModal.style.display = 'flex';
})
document.getElementById('main-login').addEventListener('click', function () {
    loginModal.style.display = 'none';
});

document.getElementById('login-container').addEventListener('click', function (e) {
    e.stopPropagation();
});


const headerMain = document.querySelector('.header-main');
const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('#searchIcon');
const closeIcon = document.querySelector('#closeIcon');

searchIcon.addEventListener('click',()=>{
    headerMain.style.display='none';
    searchBar.style.display='flex';
});

closeIcon.addEventListener('click',()=>{
    searchBar.style.display='none';
    headerMain.style.display='block';
})

window.onscroll = ()=>{
    searchBar.style.display='none';
    headerMain.style.display='block';
}


// Handling right slider

const bar = document.querySelector('#bar');
const rightSlider = document.querySelector('.right-slider');
const closeRightslider = document.querySelector('#right-slider-close');

bar.addEventListener('click',()=>{
    rightSlider.style.right='0px';
});
closeRightslider.addEventListener('click',()=>{
    rightSlider.style.right='-1000px'
})

// Slider Logic

src = ['/images/videos/vid-1.mp4','/images/videos/vid-2.mp4','/images/videos/vid-3.mp4','/images/videos/vid-4.mp4','/images/videos/vid-5.mp4'];

const rightChevron = document.querySelector('.right-chevron');
const leftChevron = document.querySelector('.left-chevron');
const video = document.getElementById('back-video');
let currentIndex = 0;


rightChevron.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex > 4){
        currentIndex=0;
    }
    if(currentIndex>=0 && currentIndex<=4){
        video.setAttribute('src',`${src[currentIndex]}`);
    }
})
leftChevron.addEventListener('click',()=>{
    if(currentIndex < 0){
        currentIndex=4;
    }
   else{
        currentIndex--;
    }
    if(currentIndex>=0 && currentIndex<=4){
        video.setAttribute('src',`${src[currentIndex]}`);
    }
})


const upperText = document.querySelector('.top-text');
console.log(upperText === 'Adventurous');

setInterval(function () {
    if(upperText.textContent === 'Adventurous'){
        upperText.textContent ='Life Changing';
    }else{
        upperText.textContent ='Adventurous';
    }
}, 3000);


setInterval(function(){
    currentIndex++;
    if(currentIndex>4){
        currentIndex=0;
    }
    video.setAttribute('src',`${src[currentIndex]}`);
},6000);




document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 180) {
            document.querySelector('.header-main').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.header-main').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            const logo = document.querySelector('#logo');
            logo.setAttribute('src','/images/logo-dark.png');
            searchIcon.style.display='none';
        } else {
            document.querySelector('.header-main').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            logo.setAttribute('src','/images/logo-light.png')
            searchIcon.style.display='block';
        }
    });
});

console.log(screen.width)


const reviewData = [

    {
        place:'Ancient Pyramids',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta voluptatem, cupiditate vel sequi ullam, magni hic, nesciunt incidunt iste nostrum provident. Iste maiores tempore nesciunt pariatur. Ullam, aliquam.',
        userName:'Measum Abbas',
        img:'/images/user-2-100x100.jpg'
    },
    {
        place:'Adventure Alaska',
        text:'Always available, extremely knowledgeable, and a tremendous "can-do" attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner..',
        userName:'Karin Thomas',
        img:'/images/author-2-100x100.jpg'
    },
    {
        place:'Action Safari',
        text:'The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in ',
        userName:'Naila Jabeen',
        img:'/images/user-1-100x100.jpg'
    }
]
const placeName = document.querySelector('.slide-name');
const slideText = document.querySelector('.slide-text');
const userName = document.querySelector('.slide-user');
const img = document.querySelector('#user-image');

const dots = document.querySelectorAll('.slider-dot');

let sliderIndex = 0;
setInterval(()=>{

    if(sliderIndex>2){
        sliderIndex=0;
    }
    placeName.textContent = reviewData[sliderIndex].place;
    slideText.textContent = reviewData[sliderIndex].text;
    userName.textContent = reviewData[sliderIndex].userName;
    img.setAttribute('src',reviewData[sliderIndex].img);
    dots.forEach((dot,index)=>{
        if(index === sliderIndex){
            dot.classList.add('first');
        }else{
            dot.classList.remove('first');
        }
    })


    sliderIndex++

},5000)

const tourSrc = ['/images/h1-custom-icon-1-hover.png','/images/h1-custom-icon-2-hover.png','/images/h1-custom-icon-3-hover.png','/images/h1-custom-icon-4-hover.png','/images/h1-custom-icon-5-hover.png'];
const tourDef = ['/images/h1-custom-icon-1.png','/images/h1-custom-icon-2.png','/images/h1-custom-icon-3.png','/images/h1-custom-icon-4.png','/images/h1-custom-icon-5.png'];

const tourIcons = document.querySelectorAll('.tour-icon');

tourIcons.forEach((icon,index)=>{
    icon.addEventListener('mouseover',()=>{

        const firstChild = icon.firstElementChild;
        if(index===0){
            firstChild.setAttribute('src',tourSrc[0])
        }else if(index===1){
            firstChild.setAttribute('src',tourSrc[1])
        }else if(index===2){
            firstChild.setAttribute('src',tourSrc[2])
        }else if(index===3){
            firstChild.setAttribute('src',tourSrc[3])
        }else if(index===4){
            firstChild.setAttribute('src',tourSrc[4])
        }else{
            // firstChild.setAttribute('src','/images/h1-custom-icon-1.png')
        }
    })
})
tourIcons.forEach((icon,index)=>{
    icon.addEventListener('mouseout',()=>{

        const firstChild = icon.firstElementChild;
        if(index===0){
            firstChild.setAttribute('src',tourDef[0])
        }else if(index===1){
            firstChild.setAttribute('src',tourDef[1])
        }else if(index===2){
            firstChild.setAttribute('src',tourDef[2])
        }else if(index===3){
            firstChild.setAttribute('src',tourDef[3])
        }else if(index===4){
            firstChild.setAttribute('src',tourDef[4])
        }else{
            // firstChild.setAttribute('src','/images/h1-custom-icon-1.png')
        }
    })
})


const pageLink = document.querySelector('.page-link');
const pageDrop = document.querySelector('.page-drop-custom');
const pageIcon = document.querySelector('.page-icon');
pageLink.addEventListener('click',()=>{

        pageDrop.classList.toggle('height');
        pageIcon.classList.toggle('rotate');


})
const destLink = document.querySelector('.dest-link');
const destDrop = document.querySelector('.dest-drop-custom');
const destIcon = document.querySelector('.dest-icon');
destLink.addEventListener('click',()=>{

    destDrop.classList.toggle('height');
    destIcon.classList.toggle('rotate');


})
const tourLink = document.querySelector('.tours-link');
const tourDrop = document.querySelector('.tours-drop-custom');
const tourIcon = document.querySelector('.tours-icon');
tourLink.addEventListener('click',()=>{

    tourDrop.classList.toggle('height');
    tourIcon.classList.toggle('rotate');


})
const blogLink = document.querySelector('.blog-link');
const blogDrop = document.querySelector('.blog-drop-custom');
const blogIcon = document.querySelector('.blog-icon');
blogLink.addEventListener('click',()=>{

    blogDrop.classList.toggle('height');
    blogIcon.classList.toggle('rotate');


})
const shopLink = document.querySelector('.shop-link');
const shopDrop = document.querySelector('.shop-drop-custom');
const shopIcon = document.querySelector('.shop-icon');
shopLink.addEventListener('click',()=>{

    shopDrop.classList.toggle('height');
    shopIcon.classList.toggle('rotate');


})

const nav = document.querySelector('.ul-nav');
const ham = document.querySelector('#ham');
ham.addEventListener('click',()=>{
    nav.classList.toggle('ham-height');
    ham.classList.toggle('rotate');
})