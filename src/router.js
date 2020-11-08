import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";

import Landing from "./views/Landing.vue";
import About from './views/About.vue';
import Traditions from './views/subpages/Traditions.vue';
import FAQ from './views/subpages/FAQ.vue';
import Contact from './views/subpages/Contact.vue';
import Government from './views/Government.vue';
import Committees from './views/subpages/Committees.vue';
import Representatives from './views/subpages/Representatives.vue';
import DuncSquad from './views/subpages/DuncSquad.vue';
import AcademicFellows from './views/subpages/AcademicFellows.vue';
import Forms from './views/subpages/Forms.vue';

import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/about/traditions",
      name: "traditions",
      components: {
        header: AppHeader,
        default: Traditions,
        footer: AppFooter
      }
    },
    {
      path: "/about/faq",
      name: "faq",
      components: {
        header: AppHeader,
        default: FAQ,
        footer: AppFooter
      }
    },
    {
      path: "/about/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/government",
      name: "government",
      components: {
        header: AppHeader,
        default: Government,
        footer: AppFooter
      }
    },
    {
      path: '/government/committees',
      name: 'committees',
      components: {
        header: AppHeader,
        default: Committees,
        footer: AppFooter
      }
    },
    {
      path: '/government/representatives',
      name: 'representatives',
      components: {
        header: AppHeader,
        default: Representatives,
        footer: AppFooter
      }
    },
    {
      path: '/people/duncsquad',
      name: 'duncsquad',
      components: {
        header: AppHeader,
        default: DuncSquad,
        footer: AppFooter
      }
    },
    {
      path: '/people/academicfellows',
      name: 'paa',
      components: {
        header: AppHeader,
        default: AcademicFellows,
        footer: AppFooter
      }
    },
    {
      path: '/resources/forms',
      name: 'forms',
      components: {
        header: AppHeader,
        default: Forms,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
