import { ContentAnalysisSummaryInfo, IContentAnalysisSummaryInfo } from "./ContentAnalysisSummaryInfo";


export interface IContentAnalysisRatingDistributionLiveResultInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** min rating on a distribution scale */
        min?: number | undefined
        
        /** max rating on a distribution scale */
        max?: number | undefined
        
        /** contains rating distribution metrics */
        metrics?: ContentAnalysisSummaryInfo | undefined

    [key: string]: any;

    }

export class ContentAnalysisRatingDistributionLiveResultInfo  implements IContentAnalysisRatingDistributionLiveResultInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** min rating on a distribution scale */

    min?: number | undefined;

    
    /** max rating on a distribution scale */

    max?: number | undefined;

    
    /** contains rating distribution metrics */

    metrics?: ContentAnalysisSummaryInfo | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisRatingDistributionLiveResultInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.min = data["min"];
            this.max = data["max"];
            this.metrics = data["metrics"] ? ContentAnalysisSummaryInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ContentAnalysisRatingDistributionLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisRatingDistributionLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["min"] = this.min;
        data["max"] = this.max;
        data["metrics"] = this.metrics ? ContentAnalysisSummaryInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}