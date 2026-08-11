import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";
import { BaseDataforseoLabsApiElementItem, IBaseDataforseoLabsApiElementItem } from "./BaseDataforseoLabsApiElementItem";


export interface IDataforseoLabsGooglePageIntersectionLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *keyword data for the returned keyword* */
        keyword_data?: KeywordDataInfo | undefined
        
        /** *contains data on the SERP elements found for the returned `keyword`* data will be provided in separate arrays for each URL you specified in the `pages` object when setting a task; depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively */
        intersection_result?: { [key: string]: BaseDataforseoLabsApiElementItem; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGooglePageIntersectionLiveItem  implements IDataforseoLabsGooglePageIntersectionLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *keyword data for the returned keyword* */

    keyword_data?: KeywordDataInfo | undefined;

    
    /** *contains data on the SERP elements found for the returned `keyword`* data will be provided in separate arrays for each URL you specified in the `pages` object when setting a task; depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively */

    intersection_result?: { [key: string]: BaseDataforseoLabsApiElementItem; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGooglePageIntersectionLiveItem) {

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
            this.keyword_data = data["keyword_data"] ? KeywordDataInfo.fromJS(data["keyword_data"]) : <any>undefined;
            this.intersection_result = data["intersection_result"];
        }
    }

    static fromJS(data: any): DataforseoLabsGooglePageIntersectionLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGooglePageIntersectionLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? KeywordDataInfo.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["intersection_result"] = this.intersection_result;
        return data;
    }
}