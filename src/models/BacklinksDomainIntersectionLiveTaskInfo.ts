import { BacklinksDomainIntersectionLiveResultInfo, IBacklinksDomainIntersectionLiveResultInfo } from "./BacklinksDomainIntersectionLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBacklinksDomainIntersectionLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BacklinksDomainIntersectionLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksDomainIntersectionLiveTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksDomainIntersectionLiveTaskInfo {

    
    /** array of results */

    result?: BacklinksDomainIntersectionLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainIntersectionLiveTaskInfo) {
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
                    this.result.push(BacklinksDomainIntersectionLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksDomainIntersectionLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainIntersectionLiveTaskInfo();
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