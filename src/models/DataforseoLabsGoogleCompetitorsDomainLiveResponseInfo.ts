import { DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo, IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo } from "./DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo {

    
    /** *array of tasks* */

    tasks?: DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo) {
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
                    this.tasks.push(DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo();
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