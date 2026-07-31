import { ContentAnalysisIdListResultInfo, IContentAnalysisIdListResultInfo } from "./ContentAnalysisIdListResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IContentAnalysisIdListTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: ContentAnalysisIdListResultInfo[] | undefined

    [key: string]: any;

    }

export class ContentAnalysisIdListTaskInfo  extends BaseResponseTaskInfo   implements IContentAnalysisIdListTaskInfo {

    
    /** *array of results* */

    result?: ContentAnalysisIdListResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisIdListTaskInfo) {
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
                    this.result.push(ContentAnalysisIdListResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisIdListTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisIdListTaskInfo();
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