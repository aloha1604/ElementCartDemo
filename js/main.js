import store from './store.js';

const renderPage = () =>{
    const rootEl = document.getElementById("root");
    const state = store.getState();
    const { activePage } = state;
    const navBar = `
        <ul>
            <li class="nav-home">Home</li>
            <li class="nav-about">About</li>
            <li class="nav-products">Products</li>
        </ul>
    `;

    const home=`
        ${navBar}
        <div>
            <h1>This is home Page</h1>
        </div>
    `;

    const about = `
        ${navBar}
        <div>
            <h1>This is About page</h1>
        </div>
    `;

    const products = `
        ${navBar}
        <div>
            <h1>This is products page</h1>
        </div>
    `;
    //bind event for navBar click
    document.onclick = event =>{
        const target = event.target;
        if(target.className==="nav-home") navigate("home");
        else if (target.className === "nav-about") navigate("about");
        else if (target.className === "nav-products") navigate("products");
    };

    let template ="";
    if (activePage === "home") template = home;
    else if (activePage === "about") template = about;
    else if (activePage === "products") template = products;

    rootEl.innerHTML = template;
};

const navigate = page =>{
    const state = store.getState();
    const newState = {
        ...state,
        activePage:page
    };
    store.setState(newState);
};
renderPage();
store.subcribe("stateChanged",renderPage);


