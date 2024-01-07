let inps = document.querySelectorAll('input');
let lovely = document.querySelector('.lovely');
let lovelys = [];



inps.forEach((item) => {
    item.addEventListener('change', () => {
        let itemSrc = item.dataset.film;
        lovely.innerHTML = '';
        if(item.checked){
            if(lovelys.includes(itemSrc) == false) {
                lovelys.push(itemSrc);
            } 
        } else {
            let index = lovelys.indexOf(itemSrc);
            lovelys.splice(index, 1)
        }
        lovelys.forEach((x) => {
            lovely.innerHTML += 
            `
            <div class="col-md-4">
                <img src="${x}" alt="..." class="img-fluid film-image">
            </div>
            `
        })
    })
})