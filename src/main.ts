import './registerServiceWorker';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';

import './styles/index.scss';
import './styles/tailwind.css';

import { Loader } from '@/directives/Loader';
import { Logger } from '@/plugins/Logger';

createApp(App).use(store).use(router).use(i18n).directive('loader', Loader).use(Logger).mount('#app');
