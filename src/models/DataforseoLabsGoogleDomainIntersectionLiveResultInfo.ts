import { DataforseoLabsGoogleDomainIntersectionLiveItem, IDataforseoLabsGoogleDomainIntersectionLiveItem } from "./DataforseoLabsGoogleDomainIntersectionLiveItem";


export interface IDataforseoLabsGoogleDomainIntersectionLiveResultInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** the first target domain in a POST array */
        target_1?: string | undefined
        
        /** the second target domain in a POST array */
        target_2?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** total amount of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains keywords, relevant SERP elements and related data */
        items?: DataforseoLabsGoogleDomainIntersectionLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainIntersectionLiveResultInfo  implements IDataforseoLabsGoogleDomainIntersectionLiveResultInfo {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** the first target domain in a POST array */

    target_1?: string | undefined;
    
    /** the second target domain in a POST array */

    target_2?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** total amount of results in our database relevant to your request */

    total_count?: number | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** contains keywords, relevant SERP elements and related data */

    items?: DataforseoLabsGoogleDomainIntersectionLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainIntersectionLiveResultInfo) {

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
            this.se_type = data["se_type"];
            this.target_1 = data["target1"];
            this.target_2 = data["target2"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleDomainIntersectionLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainIntersectionLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainIntersectionLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["target1"] = this.target_1;
        data["target2"] = this.target_2;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}