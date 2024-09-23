const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");
const modalsuccess = document.getElementById("modalSuccess");
const modalfail = document.getElementById("modalFail");


// Закрытие модального окна при клике на кнопку закрытия
closeModalBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
    modalsuccess.style.display="none";
}


// Закрытие модального окна при клике вне области модального окна
window.onclick = function(event) {
    if (event.target == modal || event.target==modalsuccess) {
        modal.style.display = "none"; // Скрываем модальное окно
        modalsuccess.style.display ="none";
    }
}


jQuery(document).ready(function() {
    jQuery("#phone").mask("+7 (999) 999-99-99");
}); // Маски для ввода


// Загрузка списка стран из отдельного файла (чтобы не засорять основной services.html)
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('countryDropdown');

    fetch('HTML/countries.html')
        .then(response => response.text())
        .then(data => {
            dropdown.innerHTML = data;
        })
});


// Валидация
document.getElementById("modalForm").addEventListener("submit", function(event){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var countryDropdown = document.getElementById("countryDropdown").value;
    var date = document.getElementById("date").value;

    if(name ==="" || email===""||phone===""||countryDropdown===""||date===""){
        event.preventDefault();
        modalfail.style.display = "flex";
    }
    else{
        event.preventDefault();
        modalfail.style.display = "none";
        modal.style.display="none";
        modalsuccess.style.display="flex";
    }
})