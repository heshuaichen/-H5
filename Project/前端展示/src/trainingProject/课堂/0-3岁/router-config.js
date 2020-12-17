import Methods from './Methods';
import Relations from './Relations';
import Answers from './Answers';
const routes = [
    {
        path: '/home/methods',
        exact:true,
        component: Methods
    },
    {
        path: '/home/methods/relations',
        component: Relations,
    },
    {
        path: '/home/methods/answers',
        component: Answers,
    }
]
export default routes;