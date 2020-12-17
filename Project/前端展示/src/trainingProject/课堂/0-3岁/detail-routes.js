import Explain from './Explain';
import Content from './Content';
const detailRoutes = [
    {
        path: '/',
        exact:true,
        component: Explain
    },
    {
        path: '/content',
        component: Content,
    }
]
export default detailRoutes;