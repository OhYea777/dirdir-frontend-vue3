// Import dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import local dependencies
import App from '@/App.vue';
import router from '@/router';

import '@/assets/scss/index.scss';

// Font Awesome icons
library.add(faFolder);

const app = createApp(App);

// Plugins
app.use(createPinia());
app.use(router);

// Components
app.component('fa-icon', FontAwesomeIcon);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
