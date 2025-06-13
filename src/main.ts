// main.ts
// @ts-ignore
import {createApp} from 'vue';
// @ts-ignore
import App from './App.vue';
import './style.css'

// @ts-ignore
import {Icon} from '@iconify/vue';

const app = createApp(App);

// Register the Icon component globally
app.component('Icon', Icon);

app.mount('#app');
