import { SerpGoogleFinanceExploreLiveAdvancedTaskInfo, ISerpGoogleFinanceExploreLiveAdvancedTaskInfo } from "./SerpGoogleFinanceExploreLiveAdvancedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleFinanceExploreLiveAdvancedResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleFinanceExploreLiveAdvancedTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceExploreLiveAdvancedResponseInfo  extends BaseResponseInfo   implements ISerpGoogleFinanceExploreLiveAdvancedResponseInfo {

    tasks?: SerpGoogleFinanceExploreLiveAdvancedTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceExploreLiveAdvancedResponseInfo) {
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
                    this.tasks.push(SerpGoogleFinanceExploreLiveAdvancedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceExploreLiveAdvancedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceExploreLiveAdvancedResponseInfo();
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