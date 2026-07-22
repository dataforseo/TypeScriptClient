import { ContentAnalysisSentimentAnalysisLiveResultInfo, IContentAnalysisSentimentAnalysisLiveResultInfo } from "./ContentAnalysisSentimentAnalysisLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IContentAnalysisSentimentAnalysisLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: ContentAnalysisSentimentAnalysisLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class ContentAnalysisSentimentAnalysisLiveTaskInfo  extends BaseResponseTaskInfo   implements IContentAnalysisSentimentAnalysisLiveTaskInfo {

    
    /** array of results */

    result?: ContentAnalysisSentimentAnalysisLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisSentimentAnalysisLiveTaskInfo) {
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
                    this.result.push(ContentAnalysisSentimentAnalysisLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisSentimentAnalysisLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSentimentAnalysisLiveTaskInfo();
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