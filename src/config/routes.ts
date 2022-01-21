import IRoute from '../interfaces/route';
import HomePage from '../pages/home-page';
import WatchLater from "../pages/watch-later-page";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/watch-later',
        name: 'Watch Later',
        component: WatchLater,
        exact: true
    }
]

export default routes;