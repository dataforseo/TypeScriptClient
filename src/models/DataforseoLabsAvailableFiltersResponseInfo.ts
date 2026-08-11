import { DataforseoLabsAvailableFiltersTaskInfo, IDataforseoLabsAvailableFiltersTaskInfo } from "./DataforseoLabsAvailableFiltersTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IDataforseoLabsAvailableFiltersResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: DataforseoLabsAvailableFiltersTaskInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsAvailableFiltersResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsAvailableFiltersResponseInfo {

    
    /** *array of tasks* */

    tasks?: DataforseoLabsAvailableFiltersTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAvailableFiltersResponseInfo) {
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
                    this.tasks.push(DataforseoLabsAvailableFiltersTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsAvailableFiltersResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAvailableFiltersResponseInfo();
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