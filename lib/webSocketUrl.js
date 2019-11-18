
const url = 'http://218.39.221.86:8888/ws';



connect = (data) => {

}

send = (data) => {

}

export const AjaxWS = {
    getRooms: data => getRooms(url + '/getRooms', data),
    connect: data => connect(url + '/connect', data),
    send: data => send(url + '/send', data)
}
