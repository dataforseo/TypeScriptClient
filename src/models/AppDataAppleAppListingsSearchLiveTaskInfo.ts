import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAppDataAppleAppListingsSearchLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: any | undefined

    [key: string]: any;

    }

export class AppDataAppleAppListingsSearchLiveTaskInfo  extends BaseResponseTaskInfo   implements IAppDataAppleAppListingsSearchLiveTaskInfo {
    
    /** array of results */

    result?: any | undefined;

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
            this.result = data["result"];
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
        
        
        data["result"] = this.result;
        return data;
    }
}