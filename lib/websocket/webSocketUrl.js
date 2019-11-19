import serverUrl from '../url';
const url = serverUrl + '/ws';

let room = "";

// onMessageReceived(){

// }
connect = (url, roomCd, func) => {
    const Stomp = require('stompjs')

    var SockJS = require('sockjs-client')
    room = roomCd;
 
    SockJS = new SockJS(url);

    stompClient = Stomp.over(SockJS);

    stompClient.connect({},()=>{onConnected(func)}, onError);

}

onConnected = (func) => {
    stompClient.subscribe("/chat/message/" + room, (payload)=>func(payload));
}


send = (data) => {
    console.log("send@@@@");

    console.log(data);

    if (stompClient) {
        stompClient.send("/chat/sendMessage/" + data.roomIdx, {}, JSON.stringify(data));
        // clear message text box after sending the message
    }
}



onError = () => {
    console.log("asd");

}



sendMessage = (type, value) => {

    if (stompClient) {
        var chatMessage = {
            sender: this.state.username,
            content: type === 'TYPING' ? value : value,
            type: type

        };

        stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));

        // clear message text box after sending the message

    }
}

export const AjaxWS = {
    getRooms: data => getRooms(url + '/getRooms', data),
    connect: (roomCd, func) => connect(url, roomCd, func),
    send: (data) => send(data)
}
