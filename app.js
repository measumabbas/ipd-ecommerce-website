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