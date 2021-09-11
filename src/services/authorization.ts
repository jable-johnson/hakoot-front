import { useRoute, useRouter, Router, RouteLocationNormalized } from 'vue-router';
import store from '@/store';

export class Auth {
  router: Router;
  route: RouteLocationNormalized;
  constructor() {
    this.router = useRouter();
    this.route = useRoute();
  }

  login(credentials: Credentials) {
    store
      .dispatch('login', credentials)
      .then((_result) => {
        const redirectUrl = (this.route.query.redirect as string | undefined) || 'users';
        this.router.push(redirectUrl);
      })
      .catch((error) => {
        console.error(error);
        //   notify.error(error.response.data.errors[0].message);
      });
  }

  static afterLogin(token: string) {
    store.commit('login', token);
    return store.dispatch('permissions', null);
  }
}

export interface Credentials {
  email: string;
  password: string;
}
