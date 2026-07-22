export interface ILocationChain   {
        
        /** card identifier */
        card_id?: string | undefined
        
        /** feature identifier
learn more about the identifier in this help center article */
        feature_id?: string | undefined
        
        /** client id
learn more about the identifier in this help center article */
        cid?: string | undefined
        
        /** title of the element in the location chain */
        title?: string | undefined

    [key: string]: any;

    }

export class LocationChain  implements ILocationChain {

    
    /** card identifier */

    card_id?: string | undefined;

    
    /** feature identifier
learn more about the identifier in this help center article */

    feature_id?: string | undefined;

    
    /** client id
learn more about the identifier in this help center article */

    cid?: string | undefined;

    
    /** title of the element in the location chain */

    title?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocationChain) {

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
            this.card_id = data["card_id"];
            this.feature_id = data["feature_id"];
            this.cid = data["cid"];
            this.title = data["title"];
        }
    }

    static fromJS(data: any): LocationChain {
        data = typeof data === 'object' ? data : {};


        let result = new LocationChain();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["card_id"] = this.card_id;
        data["feature_id"] = this.feature_id;
        data["cid"] = this.cid;
        data["title"] = this.title;
        return data;
    }
}