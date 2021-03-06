import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    //window.__redux_devtools_extension__ && window.__redux_devtools_extension__()
))

export default store