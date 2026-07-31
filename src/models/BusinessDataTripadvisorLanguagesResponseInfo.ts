import { BusinessDataTripadvisorLanguagesTaskInfo, IBusinessDataTripadvisorLanguagesTaskInfo } from "./BusinessDataTripadvisorLanguagesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IBusinessDataTripadvisorLanguagesResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: BusinessDataTripadvisorLanguagesTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorLanguagesResponseInfo  extends BaseResponseInfo   implements IBusinessDataTripadvisorLanguagesResponseInfo {

    
    /** *array of tasks* */

    tasks?: BusinessDataTripadvisorLanguagesTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorLanguagesResponseInfo) {
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
                    this.tasks.push(BusinessDataTripadvisorLanguagesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorLanguagesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorLanguagesResponseInfo();
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