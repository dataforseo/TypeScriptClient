import { BusinessDataGoogleExtendedReviewsTasksReadyResultInfo, IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo } from "./BusinessDataGoogleExtendedReviewsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataGoogleExtendedReviewsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BusinessDataGoogleExtendedReviewsTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleExtendedReviewsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleExtendedReviewsTasksReadyTaskInfo {

    
    /** array of results */

    result?: BusinessDataGoogleExtendedReviewsTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleExtendedReviewsTasksReadyTaskInfo) {
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
                    this.result.push(BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleExtendedReviewsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleExtendedReviewsTasksReadyTaskInfo();
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