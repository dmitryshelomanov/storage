import Storage from "../Abstract/Storage";

export default class extends Storage
{
    constructor (callback)
    {
        super ();
        this.error = null;
    }
    
    add (k, v)
    {
        window.localStorage.setItem (k, JSON.stringify (v));
        return this;
    }

    get (k, callback)
    {
        if (this.has (k)) {
            let v = JSON.parse (window.localStorage.getItem (k));
            return callback (this.error, v);
        }
        return callback (this.error, k);
    }

    remove (k, callback)
    {
        if (this.has (k)) {
            localStorage.removeItem (k);
            return callback (this.error, k);
        }
        return callback (this.error, k);
    }

    length ()
    {
        return window.localStorage.length;
    }

    clear ()
    {
        return window.localStorage.clear ();
    }
    
    has (k)
    {
        if (window.localStorage.getItem (k) === null) {
             this.error = `keys ${k} not found`;
            return false;
        }
        return true;
    }
}