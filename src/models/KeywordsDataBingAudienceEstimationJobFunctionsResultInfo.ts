export interface IKeywordsDataBingAudienceEstimationJobFunctionsResultInfo   {
        
        /** ID of the job function */
        job_function_id?: number | undefined
        
        /** name of the job function */
        job_function_name?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationJobFunctionsResultInfo  implements IKeywordsDataBingAudienceEstimationJobFunctionsResultInfo {

    
    /** ID of the job function */

    job_function_id?: number | undefined;

    
    /** name of the job function */

    job_function_name?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationJobFunctionsResultInfo) {

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
            this.job_function_id = data["job_function_id"];
            this.job_function_name = data["job_function_name"];
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationJobFunctionsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationJobFunctionsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["job_function_id"] = this.job_function_id;
        data["job_function_name"] = this.job_function_name;
        return data;
    }
}