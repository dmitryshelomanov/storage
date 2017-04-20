## Обертка для хранилищ (sessionStorage & localStorage)
### Ипользование
```js
// методы
add (k, v){}
get (k, callback(error, value)){}
remove (k, callback(error, key)){}
length (){}
clear (){}
has (k){}
```

```js
import Storage from "helper-storage";
let st = new Storage ();
st.config ({
  driver: "sessionStorage",
});
st.app ().add ('name', 'dima');

st.app ().get ('name', (e, v) => {
  console.log (v);
});	
```
### При использовании во vue
```js
import Vue from "vue";
import Storage from 'helper-storage';

Vue.use(Storage, {
    driver: "localStorage" // указание драйвера уже не через метод
});

// пример использования $storage
this.$storage.get('authUser', (e,v) => {//this.$storage во вью доступ к классу
    this.$store.commit('userStore/SET_AUTH_USER', v);
});
```
### При использовании с nuxt 
нужно в файле nuxt.config.js подключить плагин
~plugins/storage.js
```js
import Vue from "vue";
import Storage from "helper-storage";

Vue.use(Storage, {
    driver: "localStorage"
});
// config
  plugins: [
    {src: '~plugins/storage.js'}
  ]