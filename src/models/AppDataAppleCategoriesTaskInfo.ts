import { AppDataAppleCategoriesResultInfo, IAppDataAppleCategoriesResultInfo } from "./AppDataAppleCategoriesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAppDataAppleCategoriesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: AppDataAppleCategoriesResultInfo[] | undefined

    [key: string]: any;

    }

export class AppDataAppleCategoriesTaskInfo  extends BaseResponseTaskInfo   implements IAppDataAppleCategoriesTaskInfo {

    
    /** *array of results* */

    result?: AppDataAppleCategoriesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleCategoriesTaskInfo) {
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
                    this.result.push(AppDataAppleCategoriesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleCategoriesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleCategoriesTaskInfo();
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