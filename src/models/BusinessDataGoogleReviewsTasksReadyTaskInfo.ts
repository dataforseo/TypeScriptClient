import { BusinessDataGoogleReviewsTasksReadyResultInfo, IBusinessDataGoogleReviewsTasksReadyResultInfo } from "./BusinessDataGoogleReviewsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataGoogleReviewsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BusinessDataGoogleReviewsTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleReviewsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleReviewsTasksReadyTaskInfo {

    
    /** *array of results* */

    result?: BusinessDataGoogleReviewsTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleReviewsTasksReadyTaskInfo) {
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
                    this.result.push(BusinessDataGoogleReviewsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleReviewsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleReviewsTasksReadyTaskInfo();
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