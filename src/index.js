import LocalStorage from "./Drivers/LocalStorage";
import SessionStorage from "./Drivers/SessionStorage";

export default class Storage
{
    constructor ()
    {
        this.driver = null;
        this.inst = null;
    }
    /**
     * уточнение драйвера
     * @param {*драйвер} param0 
     */
    config ({driver}) 
    {
        this.driver = driver;
        switch (this.driver) {
            case "localStorage":
                if (this.test ('localStorage')) {
                    this.inst = new LocalStorage ();
                    return true;    
                }
                return true;
            case "sessionStorage":
                if (this.test ('sessionStorage')) {
                    this.inst = new SessionStorage ();
                    return true;
                }
                return true;
        };
    }

    /**
     * Потдерживается ли хранилище в браузере
     * @param {*драйвер} name 
     */
    test (name)
    {
        if (name in window) {
            return true;
        }
        return false;
    }
    
    /**
     * Возвратит обьект драйвера
     */
    app ()
    {
        return this.inst;
    }

    static install (Vue, {driver})
    {
        let storage = new Storage ();
        storage.config({driver: driver});
        Object.defineProperty(Vue.prototype, "$storage", {
            get () {
                return storage.app();
            }
        });
    }
}