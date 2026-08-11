import { DomainAnalyticsTechnologiesLanguagesResultInfo, IDomainAnalyticsTechnologiesLanguagesResultInfo } from "./DomainAnalyticsTechnologiesLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IDomainAnalyticsTechnologiesLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: DomainAnalyticsTechnologiesLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IDomainAnalyticsTechnologiesLanguagesTaskInfo {

    
    /** *array of results* */

    result?: DomainAnalyticsTechnologiesLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesLanguagesTaskInfo) {
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
                    this.result.push(DomainAnalyticsTechnologiesLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesLanguagesTaskInfo();
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