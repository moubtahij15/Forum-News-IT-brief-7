require('./bootstrap');
import { createApp } from "vue"

// 2. On importe AppComponent.vue
import AppComponent from "./components/AppComponent.vue"

// 3. On monte l'application Vue sur l'élément #app
createApp(AppComponent).mount("#app")