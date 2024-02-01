const CLIENT_ID = 'SmVk5YVKdi8-ZKHtTxnk1a7824PeVxf5X7Nn7nz6J4k';
const state = {
    photos: []
};

const getPhotoApi = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
        const data = await (await fetch(url)).json();
        state.photos = data;
        console.log(state.photos);
        putPhotos();
        clickOnPhoto();
    } catch(e) {
        console.error(e);
    }
};

const getPhotos = () => {
    let strokeSlide = '';
    for (let i = 0; i < state.photos.length; i++) {
        strokeSlide = strokeSlide + `
        <div class="slide" data-id="${state.photos[i].id}" style="background-image: url(${state.photos[i].urls.regular})">
            <div class="slide-text">
                <span>Photo by</span>
            </div>
        </div>
        `
    }
    return strokeSlide;
};

const putPhotos = () => {
    let slider = document.getElementById('slider');
    slider.insertAdjacentHTML('beforeend', getPhotos());
};

const clickOnPhoto = () => {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            slide.classList.toggle('active');
        });
    })
}

getPhotoApi();
