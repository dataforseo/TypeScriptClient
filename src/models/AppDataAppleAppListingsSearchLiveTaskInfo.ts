import { AppDataAppleAppListingsSearchLiveResultInfo, IAppDataAppleAppListingsSearchLiveResultInfo } from "./AppDataAppleAppListingsSearchLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAppDataAppleAppListingsSearchLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AppDataAppleAppListingsSearchLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class AppDataAppleAppListingsSearchLiveTaskInfo  extends BaseResponseTaskInfo   implements IAppDataAppleAppListingsSearchLiveTaskInfo {
    
    /** array of results */

    result?: AppDataAppleAppListingsSearchLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppListingsSearchLiveTaskInfo) {
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
                    this.result.push(AppDataAppleAppListingsSearchLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleAppListingsSearchLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppListingsSearchLiveTaskInfo();
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