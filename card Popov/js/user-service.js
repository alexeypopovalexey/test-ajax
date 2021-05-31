class UserService extends EventTarget {
    users = [];
    
    
    load (url) {
        const req = new XMLHttpRequest();
        
        req.addEventListener('load', () => {
            this.users = JSON.parse(req.responseText);
            this.sendUpdateotification()
        });

        req.open('GET', url)
        req.send();
    }
    
    sendUpdateotification() {
        const event = new CustomEvent('change', {detail: this.users});
        this.dispatchEvent(event)
    }
}

export const userService = new UserService();