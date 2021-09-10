import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  Router,
  RouteRecordNormalized,
} from 'vue-router';
import { sync } from 'vuex-router-sync';

import store from '@/store';

import { routes } from './routes';
import { checkAuth, setTitle } from './guards';

interface ScrollPositionElement extends ScrollToOptions {
  el: string | Element;
}

type ScrollPositionCoordinates = {
  behavior?: ScrollOptions['behavior'];
  left?: number;
  top?: number;
};

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  async scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    savedPosition: ScrollPositionCoordinates | null
  ): Promise<ScrollPositionCoordinates | ScrollPositionElement | false | void> {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash };
    }
    const [component]: RouteRecordNormalized[] = to.matched;

    if (component.meta.scrollToTop) {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach(setTitle);
router.beforeEach(checkAuth);

sync(store, router);

export default router;
