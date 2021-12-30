import About from "./about/Index";
import Detail from "./detail/Index";
import Home from "./home/Index";
import Tab1 from "./tab1/Index";

export default {
    menuList: [{
        name: 'home',
        component: Home,
        children: [{
            name: 'tab1',
            component: Tab1,
        }]
    }, {
        name: 'about',
        component: About
    }, {
        name: 'detail',
        component: Detail,
    }],
}