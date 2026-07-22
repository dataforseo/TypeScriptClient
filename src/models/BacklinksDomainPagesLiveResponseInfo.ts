import { BacklinksDomainPagesLiveTaskInfo, IBacklinksDomainPagesLiveTaskInfo } from "./BacklinksDomainPagesLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IBacklinksDomainPagesLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BacklinksDomainPagesLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksDomainPagesLiveResponseInfo  extends BaseResponseInfo   implements IBacklinksDomainPagesLiveResponseInfo {

    
    /** array of tasks */

    tasks?: BacklinksDomainPagesLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainPagesLiveResponseInfo) {
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
                    this.tasks.push(BacklinksDomainPagesLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksDomainPagesLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainPagesLiveResponseInfo();
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