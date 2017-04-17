# storage
## обертка для хранилищ (sessionStorage & localStorage)
### ипользование
```js
// методы
add (k, v){}
get (k, callback){}
remove (k, callback){}
length (){}
clear (){}
has (k){}
```

```js
import Storage from "../node_modules/helper-storage/src/index.js"; // если ставить через npm
let st = new Storage ();
st.config ({
  driver: "sessionStorage",
});
st.app ().add ('name', 'dima');

st.app ().get ('name', (e, v) => {
  console.log (v);
});	
```
