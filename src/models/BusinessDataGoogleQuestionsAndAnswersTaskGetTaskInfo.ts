import { BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo, IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo } from "./BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo {

    
    /** *array of results* */

    result?: BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["result"])) {
                this.result = [];
                for (let item of data["result"]) {
                    this.result.push(BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = null;
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result) {
                if (item && typeof item.toJSON === "function") {
                    data["result"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}