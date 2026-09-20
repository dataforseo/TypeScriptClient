import { AppendixKeywordsDataPriceData, IAppendixKeywordsDataPriceData } from "./AppendixKeywordsDataPriceData";
import { AppendixMerchantPriceData, IAppendixMerchantPriceData } from "./AppendixMerchantPriceData";
import { AppendixAiOptimizationPriceData, IAppendixAiOptimizationPriceData } from "./AppendixAiOptimizationPriceData";
import { AppendixSerpPriceData, IAppendixSerpPriceData } from "./AppendixSerpPriceData";
import { AppendixAppendixPriceData, IAppendixAppendixPriceData } from "./AppendixAppendixPriceData";
import { AppendixAppDataPriceData, IAppendixAppDataPriceData } from "./AppendixAppDataPriceData";
import { AppendixBacklinksPriceData, IAppendixBacklinksPriceData } from "./AppendixBacklinksPriceData";
import { AppendixBusinessDataPriceData, IAppendixBusinessDataPriceData } from "./AppendixBusinessDataPriceData";
import { AppendixContentAnalysisPriceData, IAppendixContentAnalysisPriceData } from "./AppendixContentAnalysisPriceData";
import { AppendixDataforseoLabsPriceData, IAppendixDataforseoLabsPriceData } from "./AppendixDataforseoLabsPriceData";
import { AppendixDomainAnalyticsPriceData, IAppendixDomainAnalyticsPriceData } from "./AppendixDomainAnalyticsPriceData";
import { AppendixOnPagePriceData, IAppendixOnPagePriceData } from "./AppendixOnPagePriceData";


export interface IAppendixPriceData   {
        
        keywords_data?: AppendixKeywordsDataPriceData | undefined
        
        merchant?: AppendixMerchantPriceData | undefined
        
        ai_optimization?: AppendixAiOptimizationPriceData | undefined
        
        serp?: AppendixSerpPriceData | undefined
        
        appendix?: AppendixAppendixPriceData | undefined
        
        app_data?: AppendixAppDataPriceData | undefined
        
        backlinks?: AppendixBacklinksPriceData | undefined
        
        business_data?: AppendixBusinessDataPriceData | undefined
        
        content_analysis?: AppendixContentAnalysisPriceData | undefined
        
        dataforseo_labs?: AppendixDataforseoLabsPriceData | undefined
        
        domain_analytics?: AppendixDomainAnalyticsPriceData | undefined
        
        on_page?: AppendixOnPagePriceData | undefined

    [key: string]: any;

    }

export class AppendixPriceData  implements IAppendixPriceData {

    keywords_data?: AppendixKeywordsDataPriceData | undefined;

    merchant?: AppendixMerchantPriceData | undefined;

    ai_optimization?: AppendixAiOptimizationPriceData | undefined;

    serp?: AppendixSerpPriceData | undefined;

    appendix?: AppendixAppendixPriceData | undefined;

    app_data?: AppendixAppDataPriceData | undefined;

    backlinks?: AppendixBacklinksPriceData | undefined;

    business_data?: AppendixBusinessDataPriceData | undefined;

    content_analysis?: AppendixContentAnalysisPriceData | undefined;

    dataforseo_labs?: AppendixDataforseoLabsPriceData | undefined;

    domain_analytics?: AppendixDomainAnalyticsPriceData | undefined;

    on_page?: AppendixOnPagePriceData | undefined;

    [key: string]: any;


    constructor(data?: IAppendixPriceData) {

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
            this.keywords_data = data["keywords_data"] ? AppendixKeywordsDataPriceData.fromJS(data["keywords_data"]) : <any>undefined;
            this.merchant = data["merchant"] ? AppendixMerchantPriceData.fromJS(data["merchant"]) : <any>undefined;
            this.ai_optimization = data["ai_optimization"] ? AppendixAiOptimizationPriceData.fromJS(data["ai_optimization"]) : <any>undefined;
            this.serp = data["serp"] ? AppendixSerpPriceData.fromJS(data["serp"]) : <any>undefined;
            this.appendix = data["appendix"] ? AppendixAppendixPriceData.fromJS(data["appendix"]) : <any>undefined;
            this.app_data = data["app_data"] ? AppendixAppDataPriceData.fromJS(data["app_data"]) : <any>undefined;
            this.backlinks = data["backlinks"] ? AppendixBacklinksPriceData.fromJS(data["backlinks"]) : <any>undefined;
            this.business_data = data["business_data"] ? AppendixBusinessDataPriceData.fromJS(data["business_data"]) : <any>undefined;
            this.content_analysis = data["content_analysis"] ? AppendixContentAnalysisPriceData.fromJS(data["content_analysis"]) : <any>undefined;
            this.dataforseo_labs = data["dataforseo_labs"] ? AppendixDataforseoLabsPriceData.fromJS(data["dataforseo_labs"]) : <any>undefined;
            this.domain_analytics = data["domain_analytics"] ? AppendixDomainAnalyticsPriceData.fromJS(data["domain_analytics"]) : <any>undefined;
            this.on_page = data["on_page"] ? AppendixOnPagePriceData.fromJS(data["on_page"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords_data"] = this.keywords_data ? AppendixKeywordsDataPriceData.fromJS(this.keywords_data)?.toJSON() : <any>undefined;
        data["merchant"] = this.merchant ? AppendixMerchantPriceData.fromJS(this.merchant)?.toJSON() : <any>undefined;
        data["ai_optimization"] = this.ai_optimization ? AppendixAiOptimizationPriceData.fromJS(this.ai_optimization)?.toJSON() : <any>undefined;
        data["serp"] = this.serp ? AppendixSerpPriceData.fromJS(this.serp)?.toJSON() : <any>undefined;
        data["appendix"] = this.appendix ? AppendixAppendixPriceData.fromJS(this.appendix)?.toJSON() : <any>undefined;
        data["app_data"] = this.app_data ? AppendixAppDataPriceData.fromJS(this.app_data)?.toJSON() : <any>undefined;
        data["backlinks"] = this.backlinks ? AppendixBacklinksPriceData.fromJS(this.backlinks)?.toJSON() : <any>undefined;
        data["business_data"] = this.business_data ? AppendixBusinessDataPriceData.fromJS(this.business_data)?.toJSON() : <any>undefined;
        data["content_analysis"] = this.content_analysis ? AppendixContentAnalysisPriceData.fromJS(this.content_analysis)?.toJSON() : <any>undefined;
        data["dataforseo_labs"] = this.dataforseo_labs ? AppendixDataforseoLabsPriceData.fromJS(this.dataforseo_labs)?.toJSON() : <any>undefined;
        data["domain_analytics"] = this.domain_analytics ? AppendixDomainAnalyticsPriceData.fromJS(this.domain_analytics)?.toJSON() : <any>undefined;
        data["on_page"] = this.on_page ? AppendixOnPagePriceData.fromJS(this.on_page)?.toJSON() : <any>undefined;
        return data;
    }
}