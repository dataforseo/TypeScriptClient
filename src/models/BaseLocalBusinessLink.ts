import { LocalBusinessDeliveryServiceInfo, ILocalBusinessDeliveryServiceInfo } from "./LocalBusinessDeliveryServiceInfo";


export interface IBaseLocalBusinessLink   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseLocalBusinessLink  implements IBaseLocalBusinessLink {

    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseLocalBusinessLink) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
        }
    }

    static fromJS(data: any): BaseLocalBusinessLink {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "reservation") {

            let result = new LocalBusinessReservationLink();
            result.init(data);
            return result;
        }
        if (data["type"] === "order") {

            let result = new LocalBusinessOrderLink();
            result.init(data);
            return result;
        }
        if (data["type"] === "menu") {

            let result = new LocalBusinessMenuLink();
            result.init(data);
            return result;
        }

        let result = new BaseLocalBusinessLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}

 
export interface ILocalBusinessReservationLink  extends IBaseLocalBusinessLink    {
        
        /** title of the element
domain of the reservation software */
        title?: string | undefined
        
        /** URL to make a reservation */
        url?: string | undefined

    [key: string]: any;

    }

export class LocalBusinessReservationLink  extends BaseLocalBusinessLink   implements ILocalBusinessReservationLink {

    
    /** title of the element
domain of the reservation software */

    title?: string | undefined;

    
    /** URL to make a reservation */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessReservationLink) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): LocalBusinessReservationLink {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessReservationLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}

 
export interface ILocalBusinessOrderLink  extends IBaseLocalBusinessLink    {
        
        /** lists available delivery services */
        delivery_services?: LocalBusinessDeliveryServiceInfo[] | undefined

    [key: string]: any;

    }

export class LocalBusinessOrderLink  extends BaseLocalBusinessLink   implements ILocalBusinessOrderLink {

    
    /** lists available delivery services */

    delivery_services?: LocalBusinessDeliveryServiceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessOrderLink) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["delivery_services"])) {
                this.delivery_services = [];
                for (let item of data["delivery_services"]) {
                    this.delivery_services.push(LocalBusinessDeliveryServiceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): LocalBusinessOrderLink {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessOrderLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["delivery_services"] = null;
        if (Array.isArray(this.delivery_services)) {
            data["delivery_services"] = [];
            for (let item of this.delivery_services) {
                if (item && typeof item.toJSON === "function") {
                    data["delivery_services"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ILocalBusinessMenuLink  extends IBaseLocalBusinessLink    {
        
        /** title of the element
domain of the online menu system */
        title?: string | undefined
        
        /** URL to view the menu */
        url?: string | undefined

    [key: string]: any;

    }

export class LocalBusinessMenuLink  extends BaseLocalBusinessLink   implements ILocalBusinessMenuLink {

    
    /** title of the element
domain of the online menu system */

    title?: string | undefined;

    
    /** URL to view the menu */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessMenuLink) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): LocalBusinessMenuLink {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessMenuLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}