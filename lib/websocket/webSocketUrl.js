import serverUrl from '../url';
const url = serverUrl + '/ws';

let room = "";

connect = (url, roomCd, func) => {
    const Stomp = require('stompjs')
    var SockJS = require('sockjs-client')
    room = roomCd;
    SockJS = new SockJS(url);
    stompClient = Stomp.over(SockJS);
    stompClient.connect({}, () => { onConnected(func) });
}

onConnected = (func) => {
    stompClient.subscribe("/chat/message/" + room, (payload) => func(payload));
}


send = (data) => {
    if (stompClient) {
        stompClient.send("/chat/sendMessage/" + data.roomIdx, {}, JSON.stringify(data));
    }
}

sendMessage = (type, value) => {
    if (stompClient) {
        var chatMessage = {
            sender: this.state.username,
            content: type === 'TYPING' ? value : value,
            type: type
        };
        stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
    }
}

export const AjaxWS = {
    getRooms: data => getRooms(url + '/getRooms', data),
    connect: (roomCd, func) => connect(url, roomCd, func),
    send: (data) => send(data)
}
