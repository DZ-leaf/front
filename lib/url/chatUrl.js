const url = 'http://218.39.221.86:8888/chat';
import { AsyncStorage } from "react-native";

getRooms = async (url, data) => {
    console.log("getrooms");
    const Authorization = await AsyncStorage.getItem("Authorization");
    console.log("Authorization");
    console.log(Authorization);

    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization,
        },
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        const res = await response.json()
        console.log("@@@@");
        console.log(res);

        return res;
    } catch (error) {
        console.error(error)
    }
}

getPastMessage = async (url, data) => {
    console.log("getPastMessage");
    console.log(data);
    
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization,
        },
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        const res = await response.json()
        console.log(res);
        return res;
    } catch (error) {
        console.error(error)
    }
}

export const AjaxChat = {
    getRooms: () => getRooms(url + '/getRooms'),

}
