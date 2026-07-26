export interface ILocalBusinessDeliveryServiceInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element domain of the online food ordering system */
        title?: string | undefined
        
        /** URL to place an order */
        url?: string | undefined

    [key: string]: any;

    }

export class LocalBusinessDeliveryServiceInfo  implements ILocalBusinessDeliveryServiceInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the element domain of the online food ordering system */

    title?: string | undefined;

    
    /** URL to place an order */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessDeliveryServiceInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.title = data["title"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): LocalBusinessDeliveryServiceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessDeliveryServiceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}