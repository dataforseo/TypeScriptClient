import { AmazonKeywordData, IAmazonKeywordData } from "./AmazonKeywordData";
import { AmazonInfo, IAmazonInfo } from "./AmazonInfo";


export interface IDataforseoLabsAmazonProductKeywordIntersectionsLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *keyword data for the returned keyword* */
        keyword_data?: AmazonKeywordData | undefined
        
        /** *data on the intersection* */
        intersection_result?: { [key: string]: AmazonInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonProductKeywordIntersectionsLiveItem  implements IDataforseoLabsAmazonProductKeywordIntersectionsLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *keyword data for the returned keyword* */

    keyword_data?: AmazonKeywordData | undefined;

    
    /** *data on the intersection* */

    intersection_result?: { [key: string]: AmazonInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonProductKeywordIntersectionsLiveItem) {

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
            this.keyword_data = data["keyword_data"] ? AmazonKeywordData.fromJS(data["keyword_data"]) : <any>undefined;
            this.intersection_result = data["intersection_result"];
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonProductKeywordIntersectionsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonProductKeywordIntersectionsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? AmazonKeywordData.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["intersection_result"] = this.intersection_result;
        return data;
    }
}