import{COMMENTS} from '../components/shared/comments';
import * as ActionTypes from './ActionTypes';
import { actions } from 'react-redux-form';

export const Comments=(state=COMMENTS,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            var comment =action.payload;
            comment.id=state.length;
            comment.date= new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}