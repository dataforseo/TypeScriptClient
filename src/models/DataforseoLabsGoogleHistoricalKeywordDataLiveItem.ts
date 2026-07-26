import { History, IHistory } from "./History";


export interface IDataforseoLabsGoogleHistoricalKeywordDataLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** keyword keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** array of objects with historical data for the keyword */
        history?: History[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalKeywordDataLiveItem  implements IDataforseoLabsGoogleHistoricalKeywordDataLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** keyword keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** array of objects with historical data for the keyword */

    history?: History[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalKeywordDataLiveItem) {

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
            if (Array.isArray(data["history"])) {
                this.history = [];
                for (let item of data["history"]) {
                    this.history.push(History.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalKeywordDataLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalKeywordDataLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["history"] = null;
        if (Array.isArray(this.history)) {
            data["history"] = [];
            for (let item of this.history) {
                if (item && typeof item.toJSON === "function") {
                    data["history"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}