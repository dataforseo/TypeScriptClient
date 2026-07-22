import { SerpGoogleAutocompleteLiveAdvancedResultInfo, ISerpGoogleAutocompleteLiveAdvancedResultInfo } from "./SerpGoogleAutocompleteLiveAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleAutocompleteLiveAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: SerpGoogleAutocompleteLiveAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleAutocompleteLiveAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleAutocompleteLiveAdvancedTaskInfo {

    result?: SerpGoogleAutocompleteLiveAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAutocompleteLiveAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleAutocompleteLiveAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAutocompleteLiveAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAutocompleteLiveAdvancedTaskInfo();
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