export interface IKeywordsDataBingAudienceEstimationIndustriesResultInfo   {
        
        /** ID of the industry */
        industry_id?: number | undefined
        
        /** name of the industry */
        industry_name?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationIndustriesResultInfo  implements IKeywordsDataBingAudienceEstimationIndustriesResultInfo {

    
    /** ID of the industry */

    industry_id?: number | undefined;

    
    /** name of the industry */

    industry_name?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationIndustriesResultInfo) {

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
            this.industry_id = data["industry_id"];
            this.industry_name = data["industry_name"];
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationIndustriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationIndustriesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["industry_id"] = this.industry_id;
        data["industry_name"] = this.industry_name;
        return data;
    }
}