import { SerpBaiduOrganicTaskGetRegularTaskInfo, ISerpBaiduOrganicTaskGetRegularTaskInfo } from "./SerpBaiduOrganicTaskGetRegularTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpBaiduOrganicTaskGetRegularResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpBaiduOrganicTaskGetRegularTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpBaiduOrganicTaskGetRegularResponseInfo  extends BaseResponseInfo   implements ISerpBaiduOrganicTaskGetRegularResponseInfo {

    
    /** array of tasks */

    tasks?: SerpBaiduOrganicTaskGetRegularTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBaiduOrganicTaskGetRegularResponseInfo) {
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
                    this.tasks.push(SerpBaiduOrganicTaskGetRegularTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBaiduOrganicTaskGetRegularResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduOrganicTaskGetRegularResponseInfo();
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