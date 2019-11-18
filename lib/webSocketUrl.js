import serverUrl from './url';
const url = serverUrl+'/ws';



connect = (data) => {

}

send = (data) => {

}

export const AjaxWS = {
    getRooms: data => getRooms(url + '/getRooms', data),
    connect: data => connect(url + '/connect', data),
    send: data => send(url + '/send', data)
}
