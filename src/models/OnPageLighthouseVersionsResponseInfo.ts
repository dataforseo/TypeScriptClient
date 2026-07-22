import { OnPageLighthouseVersionsTaskInfo, IOnPageLighthouseVersionsTaskInfo } from "./OnPageLighthouseVersionsTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IOnPageLighthouseVersionsResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: OnPageLighthouseVersionsTaskInfo[] | undefined

    [key: string]: any;

    }

export class OnPageLighthouseVersionsResponseInfo  extends BaseResponseInfo   implements IOnPageLighthouseVersionsResponseInfo {

    
    /** array of tasks */

    tasks?: OnPageLighthouseVersionsTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseVersionsResponseInfo) {
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
                    this.tasks.push(OnPageLighthouseVersionsTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageLighthouseVersionsResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseVersionsResponseInfo();
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