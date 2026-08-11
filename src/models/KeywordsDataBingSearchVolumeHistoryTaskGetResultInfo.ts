import { SearchVolumeHistorySearchInfo, ISearchVolumeHistorySearchInfo } from "./SearchVolumeHistorySearchInfo";


export interface IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo   {
        
        /** *keyword in a POST array* */
        keyword?: string | undefined
        
        /** *location code in a POST array* if there is no data, then the value is_`null`n */
        location_code?: number | undefined
        
        /** *language code in a POST array* if there is no data, then the value is_`null`n */
        language_code?: string | undefined
        
        device?: string[] | undefined
        
        period?: string | undefined
        
        searches?: SearchVolumeHistorySearchInfo | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo  implements IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo {

    
    /** *keyword in a POST array* */

    keyword?: string | undefined;

    
    /** *location code in a POST array* if there is no data, then the value is_`null`n */

    location_code?: number | undefined;

    
    /** *language code in a POST array* if there is no data, then the value is_`null`n */

    language_code?: string | undefined;

    device?: string[] | undefined;

    period?: string | undefined;

    searches?: SearchVolumeHistorySearchInfo | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo) {

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
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.period = data["period"];
            this.searches = data["searches"] ? SearchVolumeHistorySearchInfo.fromJS(data["searches"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["period"] = this.period;
        data["searches"] = this.searches ? SearchVolumeHistorySearchInfo.fromJS(this.searches)?.toJSON() : <any>undefined;
        return data;
    }
}