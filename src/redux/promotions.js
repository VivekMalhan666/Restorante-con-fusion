import{PROMOTIONS} from '../components/shared/promotions';
import { actions } from 'react-redux-form';

export const Promotions =(state = PROMOTIONS,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}