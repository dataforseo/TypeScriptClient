import { SerpSeznamOrganicTaskGetHtmlTaskInfo, ISerpSeznamOrganicTaskGetHtmlTaskInfo } from "./SerpSeznamOrganicTaskGetHtmlTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpSeznamOrganicTaskGetHtmlResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: SerpSeznamOrganicTaskGetHtmlTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpSeznamOrganicTaskGetHtmlResponseInfo  extends BaseResponseInfo   implements ISerpSeznamOrganicTaskGetHtmlResponseInfo {

    
    /** *array of tasks* */

    tasks?: SerpSeznamOrganicTaskGetHtmlTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpSeznamOrganicTaskGetHtmlResponseInfo) {
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
                    this.tasks.push(SerpSeznamOrganicTaskGetHtmlTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpSeznamOrganicTaskGetHtmlResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamOrganicTaskGetHtmlResponseInfo();
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