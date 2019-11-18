import serverUrl from './url';
import { AsyncStorage } from "react-native";

const url = serverUrl+'/chat';

getRooms = async (url) => {
    console.log("getRooms");
    const Authorization = await AsyncStorage.getItem("Authorization");
    console.log(Authorization);
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization,
        },
    })
    try {
        const res = await response.json()
        return res;
    } catch (error) {
        console.error(error)
    }
}

getPastMessage = async (url, data) => {
    console.log("getPastMessage");
    url = url+"/"+data;
    console.log(url);    
    const Authorization = await AsyncStorage.getItem("Authorization");    

    
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization,
        },
    })
    try {
        const res = await response.json()
        return res;
    } catch (error) {
        console.error(error)
    }
}

export const AjaxChat = {
    getRooms: () => getRooms(url + '/getRooms'),
    getPastMessage: (data) => getPastMessage(url + '/getPastMessage',data),
}
