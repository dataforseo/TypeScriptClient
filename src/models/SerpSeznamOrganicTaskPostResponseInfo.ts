import { SerpSeznamOrganicTaskPostTaskInfo, ISerpSeznamOrganicTaskPostTaskInfo } from "./SerpSeznamOrganicTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpSeznamOrganicTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpSeznamOrganicTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpSeznamOrganicTaskPostResponseInfo  extends BaseResponseInfo   implements ISerpSeznamOrganicTaskPostResponseInfo {

    
    /** array of tasks */

    tasks?: SerpSeznamOrganicTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpSeznamOrganicTaskPostResponseInfo) {
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
                    this.tasks.push(SerpSeznamOrganicTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpSeznamOrganicTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamOrganicTaskPostResponseInfo();
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