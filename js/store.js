let state = {
    activePage: 'home',
    productDetail:null,
    shoppingCart:[],
    products:[]
}

const events = {}

const subcribe = (eventName, callback) =>{
    if(!events.hasOwnProperty(eventName)) events[eventName] = [];
    events[eventName].push(callback)
}

const publish = (eventName, data)=>{
    if(!events.hasOwnProperty(eventName)) return;
    events[eventName].map(callback =>{
        callback(data);
    });
}

const getState = () => state 

const setState = newState =>{
    state = newState;
    publish("stateChanged", newState)
}

export default{
    getState,
    setState,
    subcribe
}