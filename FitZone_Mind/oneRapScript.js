//link healthyWeightLoss page with oneRap page of cult.fit webside
const myLink = document.querySelector('#myLink');
myLink.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/FitZone/FitZone_Mind/healthyWeightLoss.html';
});

//login-user 
const userBtn = document.getElementById('login-user');
var modal = document.getElementById('loginPageId');

userBtn.addEventListener('click',() => {
    modal.style.display = "block";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//shopping-cart function 
const cartfun = document.getElementById('cartIcon-btn');
const myCart = document.getElementById('myCart');

cartfun.addEventListener('click',() => {
    myCart.style.display = "block";
});
