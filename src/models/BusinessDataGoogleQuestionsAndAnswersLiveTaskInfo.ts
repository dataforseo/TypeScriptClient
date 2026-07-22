import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataGoogleQuestionsAndAnswersLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: any | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleQuestionsAndAnswersLiveTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleQuestionsAndAnswersLiveTaskInfo {

    
    /** array of results */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleQuestionsAndAnswersLiveTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): BusinessDataGoogleQuestionsAndAnswersLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleQuestionsAndAnswersLiveTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}