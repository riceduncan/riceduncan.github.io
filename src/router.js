import Vue from "vue";
import Router from "vue-router";

import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

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
import AcademicAdvising from './views/subpages/AcademicAdvising.vue';
import Forms from './views/subpages/Forms.vue';
import NotFound from './views/NotFound.vue';
import OWeek from './views/OWeek.vue';
import Theme from './views/subpages/oweek/Theme.vue';
import OWeekContact from './views/subpages/oweek/Contact.vue';
import Coordinators from './views/subpages/oweek/Coordinators.vue';
import Room from './views/subpages/oweek/Room.vue';
import MoveIn from './views/subpages/oweek/MoveIn.vue';

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
      path: "/oweek",
      name: "oweek",
      components: {
        header: AppHeader,
        default: OWeek,
        footer: AppFooter
      }
    },
    {
      path: "/oweek/theme",
      name: "oweek",
      components: {
        header: AppHeader,
        default: Theme,
        footer: AppFooter
      }
    },
    {
      path: "/oweek/coords",
      name: "oweek",
      components: {
        header: AppHeader,
        oweeknav: AppFooter,
        default: Coordinators,
        footer: AppFooter
      }
    },
    {
      path: "/oweek/room",
      name: "oweek",
      components: {
        header: AppHeader,
        default: Room,
        footer: AppFooter
      }
    },
    {
      path: "/oweek/movein",
      name: "oweek",
      components: {
        header: AppHeader,
        default: MoveIn,
        footer: AppFooter
      }
    },
    {
      path: "/oweek/contact",
      name: "oweek",
      components: {
        header: AppHeader,
        default: OWeekContact,
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
      name: 'fellows',
      components: {
        header: AppHeader,
        default: AcademicFellows,
        footer: AppFooter
      }
    },
    {
      path: '/people/paa',
      name: 'paa',
      components: {
        header: AppHeader,
        default: AcademicAdvising,
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
      path: '*',
      name: 'notfound',
      components: {
        header: AppHeader,
        default: NotFound,
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
