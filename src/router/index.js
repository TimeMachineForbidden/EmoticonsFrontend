import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Upload from '../views/Upload.vue'
import Test from '../components/test.vue'
import icon from '../components/icon.vue'
import Trend from '../views/HomeSons/Trend.vue'
import User from '../views/User.vue'
import UserLike from '../views/UserSons/UserLike.vue'
import UserSettings from '../views/UserSons/UserSettings.vue'
import Author from '../views/Author.vue'
import AuthorCreate from '../views/AuthorSons/AuthorCreate.vue'
import AuthorLike from '../views/AuthorSons/AuthorLike.vue'
import Emoji from '../views/HomeSons/Emoji.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/trend',
    children: [
      {
        path: '/trend',
        name: 'trend',
        component: Trend
      },
      {
        path:'/emoji',
        name:'emoji',
        component:Emoji,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/user',
    name:'user',
    component: User,
    redirect: '/userlike',
    children:[
      {
        path:"/userlike",
        name:'userlike',
        component:UserLike,
      },
      {
        path:"/usersettings",
        name:'usersettings',
        component:UserSettings,
      }
    ]
  },
  {
    path: "/test",
    name: 'test',
    component: Test,
  },
  {
    path: "/icon",
    name: 'icon',
    component: icon
  }, 
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path:"/author",
    name:'author',
    component:Author,
    redirect:'/authorcreate',
    children:[
      {
        path:"/authorlike",
        name:'authorlike',
        component:AuthorLike,
      },
      {
        path:"/authorcreate",
        name:'authorcreate',
        component:AuthorCreate,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     if (to.path === '/aaa') {
//       let token = localStorage.getItem('Authorization');
//       console.log(token + 'token aaaa')
//       if (token === null || token === '') {
//         console.log(token)
//         next('/login');
//       } else {
//         next();
//       }
//     }
//     else {
//       next();
//     }
//   }
// });
export default router
