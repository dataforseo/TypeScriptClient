import { DataforseoLabsGoogleDomainIntersectionLiveTaskInfo, IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo } from "./DataforseoLabsGoogleDomainIntersectionLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: DataforseoLabsGoogleDomainIntersectionLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainIntersectionLiveResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo {

    
    /** array of tasks */

    tasks?: DataforseoLabsGoogleDomainIntersectionLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo) {
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
                    this.tasks.push(DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainIntersectionLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainIntersectionLiveResponseInfo();
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