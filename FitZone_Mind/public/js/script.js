//onclick for cities list
const mycity = document.getElementById('cityName');
const overlay = document.getElementById('overlay');

mycity.addEventListener('click',() => {
    overlay.style.display = "block";
});
overlay.addEventListener('click',() => {
    overlay.style.display = "none";
});

//login-user 
const userBtn = document.getElementById('login-user');
var modal = document.getElementById('loginPageId');

userBtn.addEventListener('click',() => {
    modal.style.display = "block";
    document.getElementById('fixedNav').classList.remove('sticky-top');
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('fixedNav').classList.add('sticky-top');
    }
}

//shopping-cart function 
const cartfun = document.getElementById('cartIcon-btn');
const myCart = document.getElementById('myCart');

cartfun.addEventListener('click',() => {
    myCart.style.display = "block";
});
function scrollFuntionCart() {
    if(myCart.style.display == 'block')
        myCart.style.top = "10px";
}
//link oneRapAtTime page with mind page of cult.fit webside
const myLink = document.querySelector('#myLink');

myLink.addEventListener('click',() => {
    window.location.href = 'http://localhost:2500/mind/oneRep';
});

//Like button on second card
const likebtn = document.getElementById('likebtn');
const likeicon = document.getElementById('likeicon');

likebtn.addEventListener("click",() => {
    if(likeicon.style.color=="red"){
        likeicon.classList.remove("fa-solid");
        likeicon.classList.add("fa-regular");
        likeicon.style.color = "black";
    }
    else{
        likeicon.classList.remove("fa-regular");
        likeicon.classList.add("fa-solid");
        likeicon.style.color = "red";
    }
});
//Like button code end.......

//Comment button on second card 
const commentbutton = document.getElementById('comment-button');
const commentSection = document.getElementById('commentSection');

commentbutton.addEventListener('click',() => {
    commentSection.classList.remove('hidden');
    commentbutton.disabled = true; 
});

const form = document.querySelector('.comment-section form');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const comment = form.querySelector('textarea').value;
    // code to submit comment to database and update cooment section
    form.reset();
    commentSection.classList.add('hidden');
    commentbutton.disabled = false;
});
//Comment button conde end.......
