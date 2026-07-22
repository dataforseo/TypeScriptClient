import { DataforseoLabsGoogleSubdomainsLiveTaskInfo, IDataforseoLabsGoogleSubdomainsLiveTaskInfo } from "./DataforseoLabsGoogleSubdomainsLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IDataforseoLabsGoogleSubdomainsLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: DataforseoLabsGoogleSubdomainsLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSubdomainsLiveResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsGoogleSubdomainsLiveResponseInfo {

    
    /** array of tasks */

    tasks?: DataforseoLabsGoogleSubdomainsLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSubdomainsLiveResponseInfo) {
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
                    this.tasks.push(DataforseoLabsGoogleSubdomainsLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSubdomainsLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSubdomainsLiveResponseInfo();
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