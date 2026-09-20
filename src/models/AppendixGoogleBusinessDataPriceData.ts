import { AppendixAKeywordsDataPriceDataInfo, IAppendixAKeywordsDataPriceDataInfo } from "./AppendixAKeywordsDataPriceDataInfo";
import { AppendixAmazonMerchantPriceDataInfo, IAppendixAmazonMerchantPriceDataInfo } from "./AppendixAmazonMerchantPriceDataInfo";
import { AppendixLlmResponsesAiOptimizationPriceData, IAppendixLlmResponsesAiOptimizationPriceData } from "./AppendixLlmResponsesAiOptimizationPriceData";


export interface IAppendixGoogleBusinessDataPriceData   {
        
        extended_reviews?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        hotel_info?: AppendixAmazonMerchantPriceDataInfo | undefined
        
        hotel_searches?: AppendixLlmResponsesAiOptimizationPriceData | undefined
        
        my_business_info?: AppendixLlmResponsesAiOptimizationPriceData | undefined
        
        my_business_updates?: AppendixLlmResponsesAiOptimizationPriceData | undefined
        
        questions_and_answers?: AppendixLlmResponsesAiOptimizationPriceData | undefined
        
        reviews?: AppendixLlmResponsesAiOptimizationPriceData | undefined

    [key: string]: any;

    }

export class AppendixGoogleBusinessDataPriceData  implements IAppendixGoogleBusinessDataPriceData {

    extended_reviews?: AppendixAKeywordsDataPriceDataInfo | undefined;

    hotel_info?: AppendixAmazonMerchantPriceDataInfo | undefined;

    hotel_searches?: AppendixLlmResponsesAiOptimizationPriceData | undefined;

    my_business_info?: AppendixLlmResponsesAiOptimizationPriceData | undefined;

    my_business_updates?: AppendixLlmResponsesAiOptimizationPriceData | undefined;

    questions_and_answers?: AppendixLlmResponsesAiOptimizationPriceData | undefined;

    reviews?: AppendixLlmResponsesAiOptimizationPriceData | undefined;

    [key: string]: any;


    constructor(data?: IAppendixGoogleBusinessDataPriceData) {

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
            this.extended_reviews = data["extended_reviews"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["extended_reviews"]) : <any>undefined;
            this.hotel_info = data["hotel_info"] ? AppendixAmazonMerchantPriceDataInfo.fromJS(data["hotel_info"]) : <any>undefined;
            this.hotel_searches = data["hotel_searches"] ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(data["hotel_searches"]) : <any>undefined;
            this.my_business_info = data["my_business_info"] ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(data["my_business_info"]) : <any>undefined;
            this.my_business_updates = data["my_business_updates"] ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(data["my_business_updates"]) : <any>undefined;
            this.questions_and_answers = data["questions_and_answers"] ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(data["questions_and_answers"]) : <any>undefined;
            this.reviews = data["reviews"] ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(data["reviews"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixGoogleBusinessDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixGoogleBusinessDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["extended_reviews"] = this.extended_reviews ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.extended_reviews)?.toJSON() : <any>undefined;
        data["hotel_info"] = this.hotel_info ? AppendixAmazonMerchantPriceDataInfo.fromJS(this.hotel_info)?.toJSON() : <any>undefined;
        data["hotel_searches"] = this.hotel_searches ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(this.hotel_searches)?.toJSON() : <any>undefined;
        data["my_business_info"] = this.my_business_info ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(this.my_business_info)?.toJSON() : <any>undefined;
        data["my_business_updates"] = this.my_business_updates ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(this.my_business_updates)?.toJSON() : <any>undefined;
        data["questions_and_answers"] = this.questions_and_answers ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(this.questions_and_answers)?.toJSON() : <any>undefined;
        data["reviews"] = this.reviews ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(this.reviews)?.toJSON() : <any>undefined;
        return data;
    }
}