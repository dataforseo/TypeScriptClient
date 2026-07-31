import { BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo, IBusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo } from "./BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo  extends BaseResponseInfo   implements IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo {

    
    /** *array of tasks* */

    tasks?: BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}