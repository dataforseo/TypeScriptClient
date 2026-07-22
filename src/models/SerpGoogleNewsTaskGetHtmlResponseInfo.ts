import { SerpGoogleNewsTaskGetHtmlTaskInfo, ISerpGoogleNewsTaskGetHtmlTaskInfo } from "./SerpGoogleNewsTaskGetHtmlTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleNewsTaskGetHtmlResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpGoogleNewsTaskGetHtmlTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleNewsTaskGetHtmlResponseInfo  extends BaseResponseInfo   implements ISerpGoogleNewsTaskGetHtmlResponseInfo {

    
    /** array of tasks */

    tasks?: SerpGoogleNewsTaskGetHtmlTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleNewsTaskGetHtmlResponseInfo) {
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
                    this.tasks.push(SerpGoogleNewsTaskGetHtmlTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleNewsTaskGetHtmlResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleNewsTaskGetHtmlResponseInfo();
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