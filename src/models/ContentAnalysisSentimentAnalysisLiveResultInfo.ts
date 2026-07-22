import { PositiveConnotationDistribution, IPositiveConnotationDistribution } from "./PositiveConnotationDistribution";
import { SentimentConnotationDistribution, ISentimentConnotationDistribution } from "./SentimentConnotationDistribution";


export interface IContentAnalysisSentimentAnalysisLiveResultInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral */
        positive_connotation_distribution?: PositiveConnotationDistribution | undefined
        
        /** citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun */
        sentiment_connotation_distribution?: SentimentConnotationDistribution | undefined

    [key: string]: any;

    }

export class ContentAnalysisSentimentAnalysisLiveResultInfo  implements IContentAnalysisSentimentAnalysisLiveResultInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral */

    positive_connotation_distribution?: PositiveConnotationDistribution | undefined;

    
    /** citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun */

    sentiment_connotation_distribution?: SentimentConnotationDistribution | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisSentimentAnalysisLiveResultInfo) {

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
            this.positive_connotation_distribution = data["positive_connotation_distribution"] ? PositiveConnotationDistribution.fromJS(data["positive_connotation_distribution"]) : <any>undefined;
            this.sentiment_connotation_distribution = data["sentiment_connotation_distribution"] ? SentimentConnotationDistribution.fromJS(data["sentiment_connotation_distribution"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ContentAnalysisSentimentAnalysisLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSentimentAnalysisLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["positive_connotation_distribution"] = this.positive_connotation_distribution ? PositiveConnotationDistribution.fromJS(this.positive_connotation_distribution)?.toJSON() : <any>undefined;
        data["sentiment_connotation_distribution"] = this.sentiment_connotation_distribution ? SentimentConnotationDistribution.fromJS(this.sentiment_connotation_distribution)?.toJSON() : <any>undefined;
        return data;
    }
}