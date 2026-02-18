import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";
import { BaseDataforseoLabsApiElementItem, IBaseDataforseoLabsApiElementItem } from "./BaseDataforseoLabsApiElementItem";


export interface IDataforseoLabsGoogleDomainIntersectionLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** keyword data for the returned keyword */
        keyword_data?: KeywordDataInfo | undefined
        
        /** contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below */
        first_domain_serp_element?: BaseDataforseoLabsApiElementItem | undefined
        
        /** contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below */
        second_domain_serp_element?: BaseDataforseoLabsApiElementItem | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainIntersectionLiveItem  implements IDataforseoLabsGoogleDomainIntersectionLiveItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** keyword data for the returned keyword */

    keyword_data?: KeywordDataInfo | undefined;
    
    /** contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below */

    first_domain_serp_element?: BaseDataforseoLabsApiElementItem | undefined;
    
    /** contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below */

    second_domain_serp_element?: BaseDataforseoLabsApiElementItem | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainIntersectionLiveItem) {

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
            this.first_domain_serp_element = data["first_domain_serp_element"] ? BaseDataforseoLabsApiElementItem.fromJS(data["first_domain_serp_element"]) : <any>undefined;
            this.second_domain_serp_element = data["second_domain_serp_element"] ? BaseDataforseoLabsApiElementItem.fromJS(data["second_domain_serp_element"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainIntersectionLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainIntersectionLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? KeywordDataInfo.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["first_domain_serp_element"] = this.first_domain_serp_element ? BaseDataforseoLabsApiElementItem.fromJS(this.first_domain_serp_element)?.toJSON() : <any>undefined;
        data["second_domain_serp_element"] = this.second_domain_serp_element ? BaseDataforseoLabsApiElementItem.fromJS(this.second_domain_serp_element)?.toJSON() : <any>undefined;
        return data;
    }
}