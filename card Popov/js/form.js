import {userService} from './user-service'
const forma = document.querySelector('form');
const title = document.querySelector('[name="title"]');
const text = document.querySelector('[name="text"]');

function listener (req, res) {
    const currentUser = null;
    for(let user of userService) {
        if (req.url === `/${user._id}`) {
            console.log(user)
        }
    }
}