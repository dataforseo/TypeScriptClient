import { AppDataAppleAppListTaskGetAdvancedResultInfo, IAppDataAppleAppListTaskGetAdvancedResultInfo } from "./AppDataAppleAppListTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAppDataAppleAppListTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AppDataAppleAppListTaskGetAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class AppDataAppleAppListTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements IAppDataAppleAppListTaskGetAdvancedTaskInfo {

    
    /** array of results */

    result?: AppDataAppleAppListTaskGetAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppListTaskGetAdvancedTaskInfo) {
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
                    this.result.push(AppDataAppleAppListTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleAppListTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppListTaskGetAdvancedTaskInfo();
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