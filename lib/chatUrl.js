import serverUrl from './url';
import { AsyncStorage } from "react-native";

const url = serverUrl+'/chat';

getRooms = async (url) => {
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

getPastMessage = async (url, data) => {
    url = url+"/"+data;  
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
