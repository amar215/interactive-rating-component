const circles = document.querySelectorAll('.circle');
const btn = document.querySelector('.btn');
const rating = document.querySelector('.rate');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');


//  adding rating

circles.forEach((circle) => {
    circle.addEventListener('click', ()=> {
        rating.innerHTML = circle.textContent;
    })
})

// Changing Card

thankYouCard.style.display = 'none';

btn.addEventListener('click', ()=> {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'flex';
})