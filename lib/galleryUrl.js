import serverUrl from './url';

const url = '/gallery';

photoUpload = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        return await response.json();
    }catch (error) {
        console.log(error);        
    }
}

export const AjaxGallery = {
    photoUpload: data => photoUpload(serverUrl + url + './photoUpload', data),
}