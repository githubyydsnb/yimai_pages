function parseCookie(nameParam,index) {
    let allCookies = document.cookie;
    let cookieArray = allCookies.split(';')
    for (let i = 0; i < cookieArray.length; i++) {
        let name = cookieArray[i].split('=')[0].trim()
        if (name == nameParam) {
            return cookieArray[i].split('=')[1]
        }
    }
}