import {ADD} from '../actions';
import {combineReducers} from 'redux';

//초기 값
const initState = {
    Title: 'none',
    Detail: 'none'
};

//리듀서
const data = (state = initState, action) => {
    switch(action.type){
        case ADD:
            return state, {
                Title: state.Title,
                Detail: state.Detail,
            }
        default:
            return state;
    }
}

const App = combineReducers({
    data
});

export default App;