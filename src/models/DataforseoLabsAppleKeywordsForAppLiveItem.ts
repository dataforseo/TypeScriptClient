import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";
import { AppleRankedSerpElementInfo, IAppleRankedSerpElementInfo } from "./AppleRankedSerpElementInfo";


export interface IDataforseoLabsAppleKeywordsForAppLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *keyword data for the returned keyword* */
        keyword_data?: KeywordDataInfo | undefined
        
        /** *contains data on the domain's SERP element found for the returned `keyword`* */
        ranked_serp_element?: AppleRankedSerpElementInfo | undefined

    [key: string]: any;

    }

export class DataforseoLabsAppleKeywordsForAppLiveItem  implements IDataforseoLabsAppleKeywordsForAppLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *keyword data for the returned keyword* */

    keyword_data?: KeywordDataInfo | undefined;

    
    /** *contains data on the domain's SERP element found for the returned `keyword`* */

    ranked_serp_element?: AppleRankedSerpElementInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAppleKeywordsForAppLiveItem) {

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
            this.ranked_serp_element = data["ranked_serp_element"] ? AppleRankedSerpElementInfo.fromJS(data["ranked_serp_element"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsAppleKeywordsForAppLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAppleKeywordsForAppLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? KeywordDataInfo.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["ranked_serp_element"] = this.ranked_serp_element ? AppleRankedSerpElementInfo.fromJS(this.ranked_serp_element)?.toJSON() : <any>undefined;
        return data;
    }
}