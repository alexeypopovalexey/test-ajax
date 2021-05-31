import {userService} from "./user-service.js";
const body = document.querySelector('body');
const btnSubmit = document.querySelector('#ajax_form')

function drawCard (event) {
    const users = event.detail;
    const ourCards = document.querySelector('#cards');
    const currentUsers = [];
    
    for (let user of users) {
        if (user.index >= users.length - 10) {
            currentUsers.unshift(user)
        }
    }
    for (let user of currentUsers) {
        const textCard = 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer';
        const arrayTextCard = textCard.split(' ');
        arrayTextCard.splice(10, arrayTextCard.length - 10);
        const text = arrayTextCard.join(' ')

            ourCards.insertAdjacentHTML ('beforeend', 
             `<div class="col-12 col-md-4 col-lg-3 card__container"><a href="#" class="card__my">
            <div class="card">
            <img src="${user.picture}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text card__body">${text}</p>
            <span class="comments">You have ${user.index} coments</span>
                <button type="button" class="btn btn-secondary my__btn" name="${user.name}">Редактировать</button>
            </div>
            </div>
            </a>   
            </div> `
            )
    }
}



function changePost (event) {
    const target = event.target;
    const usersList =userService.users;
    const textCard = 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer';

    if (target.tagName === "BUTTON") { 
        for(let user of usersList) {
            if(target.name === user.name) {
                
                body.innerHTML = `<div class="form__my" ><form action="" method="POST" class="col-8" id="ajax_form" >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" name="title__form" value="${user.name}" autocomplete="off">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Text</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" name="text__form" rows="3" autocomplete="off">${textCard}</textarea>
                  </div>
                  <button type="submit" class="btn btn-success" id="btn_submit">Submit</button>
                </form>
                </div>`
            }
        }
        
    }
}

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),
          
 	});

}


function startUp () {
    userService.addEventListener('change', drawCard);
    userService.load('http://www.json-generator.com/api/json/get/bTOOvcPvyq?indent=2');
}

window.addEventListener('load', startUp);
window.addEventListener('click', changePost);
jQuery(document).ready(function($) {
    $('#btn_submit').on('click', function (event) {
        event.preventDefault();
        alert('sd')
    });
  });


