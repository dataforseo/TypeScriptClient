import { DataforseoLabsGoogleAppCompetitorsLiveTaskInfo, IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo } from "./DataforseoLabsGoogleAppCompetitorsLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: DataforseoLabsGoogleAppCompetitorsLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleAppCompetitorsLiveResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo {

    
    /** array of tasks */

    tasks?: DataforseoLabsGoogleAppCompetitorsLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo) {
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
                    this.tasks.push(DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleAppCompetitorsLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleAppCompetitorsLiveResponseInfo();
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