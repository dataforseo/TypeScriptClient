import { OnPageAvailableFiltersResultInfo, IOnPageAvailableFiltersResultInfo } from "./OnPageAvailableFiltersResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageAvailableFiltersTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* contains the full list of available parameters that can be used for data filtration the parameters are grouped by the endpoint they can be used with */
        result?: OnPageAvailableFiltersResultInfo[] | undefined

    [key: string]: any;

    }

export class OnPageAvailableFiltersTaskInfo  extends BaseResponseTaskInfo   implements IOnPageAvailableFiltersTaskInfo {

    
    /** *array of results* contains the full list of available parameters that can be used for data filtration the parameters are grouped by the endpoint they can be used with */

    result?: OnPageAvailableFiltersResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageAvailableFiltersTaskInfo) {
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
                    this.result.push(OnPageAvailableFiltersResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageAvailableFiltersTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageAvailableFiltersTaskInfo();
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