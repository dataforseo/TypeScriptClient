import { DataforseoLabsGoogleSubdomainsLiveResultInfo, IDataforseoLabsGoogleSubdomainsLiveResultInfo } from "./DataforseoLabsGoogleSubdomainsLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IDataforseoLabsGoogleSubdomainsLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsGoogleSubdomainsLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSubdomainsLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsGoogleSubdomainsLiveTaskInfo {

    
    /** array of results */

    result?: DataforseoLabsGoogleSubdomainsLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSubdomainsLiveTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["result"])) {
                this.result = [];
                for (let item of data["result"]) {
                    this.result.push(DataforseoLabsGoogleSubdomainsLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSubdomainsLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSubdomainsLiveTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = null;
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result) {
                if (item && typeof item.toJSON === "function") {
                    data["result"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}