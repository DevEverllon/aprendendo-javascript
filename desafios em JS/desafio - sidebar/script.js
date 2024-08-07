function openSiderbar() {
    const siderBar = document.querySelector('#sidebar');
    siderBar.classList.toggle('open_siderbar');
}

const buttonOpen = document.querySelector('#open_btn');
buttonOpen.addEventListener('click', openSiderbar);
