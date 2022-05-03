let button = document.querySelector('button');
let page = document.querySelector('.page_open');
let audio = document.createElement('audio');
audio.setAttribute('src', 'Frédéric_François_🌷_Une_rose_dans_le_désert_🌷[EagleConverter.com].mp3');
button.onclick = function(){
    page.classList.toggle('page_open_active');
    audio.play()
}