
import Home from './work02/Home'
import Doc from './work02/Doc'
import Tuto from './work02/Tuto'
import Blog from './work02/Blog'
import Comm from './work02/Comm'
import Login from './work02/Login'
import Core from './work02/docpages/Core'
import Guide from './work02/docpages/Guide'
import Api from './work02/docpages/Api'
import Hooks from './work02/docpages/Hooks'
const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/doc',
        component:Doc,
        pri:true,
        routes:[
            {
                path:'/doc/core',
                component:Core,
            },
            {
                path:'/doc/guide',
                component:Guide,
            },
            {
                path:'/doc/api',
                component:Api,
            },
            {
                path:'/doc/hooks',
                component:Hooks,
            }
        ]
    },
    {
        path:'/tuto',
        component:Tuto,
        pri:true
    },
    {
        path:'/blog',
        component:Blog
    },
    {
        path:'/comm',
        component:Comm
    },
    {
        path:'/login',
        component:Login
    }
]

export default routes