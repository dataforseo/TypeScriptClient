import { AppDataGoogleAppListingsSearchLiveItem, IAppDataGoogleAppListingsSearchLiveItem } from "./AppDataGoogleAppListingsSearchLiveItem";


export interface IAppDataGoogleAppListingsSearchLiveResultInfo   {
        
        /** the total number of relevant results in the database */
        total_count?: number | undefined
        
        /** the number of items in the results array */
        count?: number | undefined
        
        /** offset in the results array of returned apps */
        offset?: number | undefined
        
        /** token for subsequent requests you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request */
        offset_token?: string | undefined
        
        /** array of apps and related data */
        items?: AppDataGoogleAppListingsSearchLiveItem[] | undefined

    [key: string]: any;

    }

export class AppDataGoogleAppListingsSearchLiveResultInfo  implements IAppDataGoogleAppListingsSearchLiveResultInfo {

    
    /** the total number of relevant results in the database */

    total_count?: number | undefined;

    
    /** the number of items in the results array */

    count?: number | undefined;

    
    /** offset in the results array of returned apps */

    offset?: number | undefined;

    
    /** token for subsequent requests you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request */

    offset_token?: string | undefined;

    
    /** array of apps and related data */

    items?: AppDataGoogleAppListingsSearchLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataGoogleAppListingsSearchLiveResultInfo) {

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
            this.total_count = data["total_count"];
            this.count = data["count"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AppDataGoogleAppListingsSearchLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataGoogleAppListingsSearchLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGoogleAppListingsSearchLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["count"] = this.count;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
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