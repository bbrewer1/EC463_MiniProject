import {useState} from 'react';
import react from 'react';
import { State } from 'react-native-gesture-handler';

export const GlobalUserState = () => {
    const[userdata, setUserdata] = useState(null);
    const[mealdata, setMealdata] = useState([]);
    const actions = (action) => {
        const {type, payload} = action;
        switch(type){
            case 'setUser':
            return setUserdata(payload);
            case 'setMeal':
            return setMealdata(payload);
            case 'appendMeal':
            return setMealdata([...mealdata, payload]);
            default:
            return userdata;
        }
    }
    return {userdata,mealdata,actions}
}

