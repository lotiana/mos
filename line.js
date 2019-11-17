let card__lines = document.querySelectorAll('.ryd__lin');

for (let i = 0; i < card__lines.length; i++) {
    card__lines[i].onclick = function(){
        this.classList.toggle('card__line__helper');

    }
}