import Storage from "./Abstract/Storage";

export default class extends Storage
{
    constructor(type)
    {
        super();
        this.error = null;
        this.type = type
    }

    add(k, v)
    {
        window[this.type].setItem(k, JSON.stringify(v));
        return this;
    }

    get(k, callback)
    {
        if (this.has(k)) {
            let v = JSON.parse(window[this.type].getItem(k));
            return callback(this.error, v);
        }
        return callback(this.error, null);
    }

    remove(k, callback)
    {
        if (this.has (k)) {
            localStorage.removeItem(k);
            return callback(this.error, k);
        }
        return callback(this.error, k);
    }

    length()
    {
        return window[this.type].length;
    }

    clear()
    {
        return window[this.type].clear();
    }

    has(k)
    {
        if (window[this.type].getItem(k) === null) {
            this.error = `keys ${k} not found`;
            return false;
        } else {
            this.error = null;
            return true;
        }
    }
}