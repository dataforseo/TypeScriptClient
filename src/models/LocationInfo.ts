export interface ILocationInfo   {
        
        /** name of the event’s venue */
        name?: string | undefined
        
        /** address of the event’s venue */
        address?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** google-defined client id
can be used with Google Reviews API to get a full list of reviews */
        cid?: string | undefined
        
        /** the unique identifier of the element in SERP */
        feature_id?: string | undefined

    [key: string]: any;

    }

export class LocationInfo  implements ILocationInfo {

    
    /** name of the event’s venue */

    name?: string | undefined;

    
    /** address of the event’s venue */

    address?: string | undefined;

    
    /** search URL with refinement parameters */

    url?: string | undefined;

    
    /** google-defined client id
can be used with Google Reviews API to get a full list of reviews */

    cid?: string | undefined;

    
    /** the unique identifier of the element in SERP */

    feature_id?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocationInfo) {

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
            this.name = data["name"];
            this.address = data["address"];
            this.url = data["url"];
            this.cid = data["cid"];
            this.feature_id = data["feature_id"];
        }
    }

    static fromJS(data: any): LocationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new LocationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["address"] = this.address;
        data["url"] = this.url;
        data["cid"] = this.cid;
        data["feature_id"] = this.feature_id;
        return data;
    }
}