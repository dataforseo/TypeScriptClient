import { DataforseoLabsGoogleHistoricalSerpsLiveItem, IDataforseoLabsGoogleHistoricalSerpsLiveItem } from "./DataforseoLabsGoogleHistoricalSerpsLiveItem";


export interface IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo   {
        
        /** search engine type in a POST array */
        se_type?: string | undefined
        
        /** keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** the total amount of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** historical SERPs and related data found in the database */
        items?: DataforseoLabsGoogleHistoricalSerpsLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalSerpsLiveResultInfo  implements IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo {

    
    /** search engine type in a POST array */

    se_type?: string | undefined;

    
    /** keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** the total amount of results in our database relevant to your request */

    total_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** historical SERPs and related data found in the database */

    items?: DataforseoLabsGoogleHistoricalSerpsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo) {

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
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleHistoricalSerpsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalSerpsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword"] = this.keyword;
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