import { DataforseoLabsGoogleHistoricalSearchVolumeLiveItem, IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem } from "./DataforseoLabsGoogleHistoricalSearchVolumeLiveItem";


export interface IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains keywords and related data */
        items?: DataforseoLabsGoogleHistoricalSearchVolumeLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo  implements IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains keywords and related data */

    items?: DataforseoLabsGoogleHistoricalSearchVolumeLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
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