import { SerpGoogleAutocompleteTasksReadyResultInfo, ISerpGoogleAutocompleteTasksReadyResultInfo } from "./SerpGoogleAutocompleteTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleAutocompleteTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleAutocompleteTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleAutocompleteTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleAutocompleteTasksReadyTaskInfo {

    
    /** array of results */

    result?: SerpGoogleAutocompleteTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAutocompleteTasksReadyTaskInfo) {
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
                    this.result.push(SerpGoogleAutocompleteTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAutocompleteTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAutocompleteTasksReadyTaskInfo();
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