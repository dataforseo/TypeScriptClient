import { OnPageResourcesTaskInfo, IOnPageResourcesTaskInfo } from "./OnPageResourcesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IOnPageResourcesResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: OnPageResourcesTaskInfo[] | undefined

    [key: string]: any;

    }

export class OnPageResourcesResponseInfo  extends BaseResponseInfo   implements IOnPageResourcesResponseInfo {

    
    /** array of tasks */

    tasks?: OnPageResourcesTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageResourcesResponseInfo) {
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
                    this.tasks.push(OnPageResourcesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageResourcesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourcesResponseInfo();
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