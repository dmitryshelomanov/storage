import LocalStorage from "./Drivers/LocalStorage";
import SessionStorage from "./Drivers/SessionStorage";

export default class Storage
{
    constructor ()
    {
        this.driver = null;
        this.inst = null;
    }

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

    test (name)
    {
        if (name in window) {
            return true;
        }
        return false;
    }
    
    app ()
    {
        return this.inst;
    }
}