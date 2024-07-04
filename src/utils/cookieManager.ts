export const setCookie = (key: string, value: string) => {
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));   // => expires in a week
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${key}=${value};${expires};path=/`;
}

export const getCookie = (key: string): string | undefined => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${key}=`)) {
            return cookie.substring(key.length + 1);
        }
    }
    return undefined;
}


export const deleteCookie = (key: string) => {
    document.cookie = key + "=; Max-Age=-1; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}