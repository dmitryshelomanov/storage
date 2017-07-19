import Strategy from "./Strategy";

export default class Storage
{
    constructor (type = 'localStorage', switching = false)
    {
        this.inst = null;
        this.type = type;
        this.switching = switching;
    }

    app()
    {
        if (this.type in window) {
            return this.singleton(new Strategy(this.type));
        } else {
            this.switching
                ? this.singleton(new Strategy(this.switchingType()))
                : console.error(`${this.type} not support`);
        }
    }

    singleton(object) {
        if (this.inst === null) {
            return this.inst = object;
        }
        return this.inst;
    }

    switchingType() {
        return this.type === 'localStorage' ? 'localStorage' : 'sessionStorage';
    }

    static install(Vue, type)
    {
        let storage = new Storage ();
        Object.defineProperty(Vue.prototype, "$storage", {
            get () {
                return storage.app();
            }
        });
    }
}