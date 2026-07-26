import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { AppendixKeywordsDataDaysRatesDataInfo, IAppendixKeywordsDataDaysRatesDataInfo } from "./AppendixKeywordsDataDaysRatesDataInfo";
import { AppendixAppendixDaysRatesDataInfo, IAppendixAppendixDaysRatesDataInfo } from "./AppendixAppendixDaysRatesDataInfo";
import { AppendixDataforseoLabsLimitsRatesDataInfo, IAppendixDataforseoLabsLimitsRatesDataInfo } from "./AppendixDataforseoLabsLimitsRatesDataInfo";
import { AppendixDomainAnalyticsLimitsRatesDataInfo, IAppendixDomainAnalyticsLimitsRatesDataInfo } from "./AppendixDomainAnalyticsLimitsRatesDataInfo";
import { AppendixMerchantLimitsRatesDataInfo, IAppendixMerchantLimitsRatesDataInfo } from "./AppendixMerchantLimitsRatesDataInfo";
import { AppendixOnPageLimitsRatesDataInfo, IAppendixOnPageLimitsRatesDataInfo } from "./AppendixOnPageLimitsRatesDataInfo";
import { AppendixBusinessDataLimitsRatesDataInfo, IAppendixBusinessDataLimitsRatesDataInfo } from "./AppendixBusinessDataLimitsRatesDataInfo";
import { AppendixBacklinksLimitsRatesDataInfo, IAppendixBacklinksLimitsRatesDataInfo } from "./AppendixBacklinksLimitsRatesDataInfo";
import { AppendixAppDataLimitsRatesDataInfo, IAppendixAppDataLimitsRatesDataInfo } from "./AppendixAppDataLimitsRatesDataInfo";
import { AppendixContentAnalysisLimitsRatesDataInfo, IAppendixContentAnalysisLimitsRatesDataInfo } from "./AppendixContentAnalysisLimitsRatesDataInfo";
import { AppendixContentGenerationLimitsRatesDataInfo, IAppendixContentGenerationLimitsRatesDataInfo } from "./AppendixContentGenerationLimitsRatesDataInfo";


export interface IAppendixStatisticsRatesDataInfo   {
        
        serp?: AppendixSerpDaysRatesDataInfo | undefined
        
        /** total amount of money deposited to your account */
        total?: number | undefined
        
        total_serp?: number | undefined
        
        keywords_data?: AppendixKeywordsDataDaysRatesDataInfo | undefined
        
        total_keywords_data?: number | undefined
        
        appendix?: AppendixAppendixDaysRatesDataInfo | undefined
        
        total_appendix?: number | undefined
        
        dataforseo_labs?: AppendixDataforseoLabsLimitsRatesDataInfo | undefined
        
        total_dataforseo_labs?: number | undefined
        
        domain_analytics?: AppendixDomainAnalyticsLimitsRatesDataInfo | undefined
        
        total_domain_analytics?: number | undefined
        
        merchant?: AppendixMerchantLimitsRatesDataInfo | undefined
        
        total_merchant?: number | undefined
        
        on_page?: AppendixOnPageLimitsRatesDataInfo | undefined
        
        total_on_page?: number | undefined
        
        business_data?: AppendixBusinessDataLimitsRatesDataInfo | undefined
        
        total_business_data?: number | undefined
        
        backlinks?: AppendixBacklinksLimitsRatesDataInfo | undefined
        
        total_backlinks?: number | undefined
        
        app_data?: AppendixAppDataLimitsRatesDataInfo | undefined
        
        total_app_data?: number | undefined
        
        content_analysis?: AppendixContentAnalysisLimitsRatesDataInfo | undefined
        
        total_content_analysis?: number | undefined
        
        content_generation?: AppendixContentGenerationLimitsRatesDataInfo | undefined
        
        total_content_generation?: number | undefined
        
        /** time period for grouping day in the yyyy-MM-dd format minute in the yyyy-MM-dd HH:mm format */
        value?: string | undefined

    [key: string]: any;

    }

export class AppendixStatisticsRatesDataInfo  implements IAppendixStatisticsRatesDataInfo {

    serp?: AppendixSerpDaysRatesDataInfo | undefined;

    
    /** total amount of money deposited to your account */

    total?: number | undefined;

    total_serp?: number | undefined;

    keywords_data?: AppendixKeywordsDataDaysRatesDataInfo | undefined;

    total_keywords_data?: number | undefined;

    appendix?: AppendixAppendixDaysRatesDataInfo | undefined;

    total_appendix?: number | undefined;

    dataforseo_labs?: AppendixDataforseoLabsLimitsRatesDataInfo | undefined;

    total_dataforseo_labs?: number | undefined;

    domain_analytics?: AppendixDomainAnalyticsLimitsRatesDataInfo | undefined;

    total_domain_analytics?: number | undefined;

    merchant?: AppendixMerchantLimitsRatesDataInfo | undefined;

    total_merchant?: number | undefined;

    on_page?: AppendixOnPageLimitsRatesDataInfo | undefined;

    total_on_page?: number | undefined;

    business_data?: AppendixBusinessDataLimitsRatesDataInfo | undefined;

    total_business_data?: number | undefined;

    backlinks?: AppendixBacklinksLimitsRatesDataInfo | undefined;

    total_backlinks?: number | undefined;

    app_data?: AppendixAppDataLimitsRatesDataInfo | undefined;

    total_app_data?: number | undefined;

    content_analysis?: AppendixContentAnalysisLimitsRatesDataInfo | undefined;

    total_content_analysis?: number | undefined;

    content_generation?: AppendixContentGenerationLimitsRatesDataInfo | undefined;

    total_content_generation?: number | undefined;

    
    /** time period for grouping day in the yyyy-MM-dd format minute in the yyyy-MM-dd HH:mm format */

    value?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppendixStatisticsRatesDataInfo) {

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
            this.serp = data["serp"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["serp"]) : <any>undefined;
            this.total = data["total"];
            this.total_serp = data["total_serp"];
            this.keywords_data = data["keywords_data"] ? AppendixKeywordsDataDaysRatesDataInfo.fromJS(data["keywords_data"]) : <any>undefined;
            this.total_keywords_data = data["total_keywords_data"];
            this.appendix = data["appendix"] ? AppendixAppendixDaysRatesDataInfo.fromJS(data["appendix"]) : <any>undefined;
            this.total_appendix = data["total_appendix"];
            this.dataforseo_labs = data["dataforseo_labs"] ? AppendixDataforseoLabsLimitsRatesDataInfo.fromJS(data["dataforseo_labs"]) : <any>undefined;
            this.total_dataforseo_labs = data["total_dataforseo_labs"];
            this.domain_analytics = data["domain_analytics"] ? AppendixDomainAnalyticsLimitsRatesDataInfo.fromJS(data["domain_analytics"]) : <any>undefined;
            this.total_domain_analytics = data["total_domain_analytics"];
            this.merchant = data["merchant"] ? AppendixMerchantLimitsRatesDataInfo.fromJS(data["merchant"]) : <any>undefined;
            this.total_merchant = data["total_merchant"];
            this.on_page = data["on_page"] ? AppendixOnPageLimitsRatesDataInfo.fromJS(data["on_page"]) : <any>undefined;
            this.total_on_page = data["total_on_page"];
            this.business_data = data["business_data"] ? AppendixBusinessDataLimitsRatesDataInfo.fromJS(data["business_data"]) : <any>undefined;
            this.total_business_data = data["total_business_data"];
            this.backlinks = data["backlinks"] ? AppendixBacklinksLimitsRatesDataInfo.fromJS(data["backlinks"]) : <any>undefined;
            this.total_backlinks = data["total_backlinks"];
            this.app_data = data["app_data"] ? AppendixAppDataLimitsRatesDataInfo.fromJS(data["app_data"]) : <any>undefined;
            this.total_app_data = data["total_app_data"];
            this.content_analysis = data["content_analysis"] ? AppendixContentAnalysisLimitsRatesDataInfo.fromJS(data["content_analysis"]) : <any>undefined;
            this.total_content_analysis = data["total_content_analysis"];
            this.content_generation = data["content_generation"] ? AppendixContentGenerationLimitsRatesDataInfo.fromJS(data["content_generation"]) : <any>undefined;
            this.total_content_generation = data["total_content_generation"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): AppendixStatisticsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixStatisticsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["serp"] = this.serp ? AppendixSerpDaysRatesDataInfo.fromJS(this.serp)?.toJSON() : <any>undefined;
        data["total"] = this.total;
        data["total_serp"] = this.total_serp;
        data["keywords_data"] = this.keywords_data ? AppendixKeywordsDataDaysRatesDataInfo.fromJS(this.keywords_data)?.toJSON() : <any>undefined;
        data["total_keywords_data"] = this.total_keywords_data;
        data["appendix"] = this.appendix ? AppendixAppendixDaysRatesDataInfo.fromJS(this.appendix)?.toJSON() : <any>undefined;
        data["total_appendix"] = this.total_appendix;
        data["dataforseo_labs"] = this.dataforseo_labs ? AppendixDataforseoLabsLimitsRatesDataInfo.fromJS(this.dataforseo_labs)?.toJSON() : <any>undefined;
        data["total_dataforseo_labs"] = this.total_dataforseo_labs;
        data["domain_analytics"] = this.domain_analytics ? AppendixDomainAnalyticsLimitsRatesDataInfo.fromJS(this.domain_analytics)?.toJSON() : <any>undefined;
        data["total_domain_analytics"] = this.total_domain_analytics;
        data["merchant"] = this.merchant ? AppendixMerchantLimitsRatesDataInfo.fromJS(this.merchant)?.toJSON() : <any>undefined;
        data["total_merchant"] = this.total_merchant;
        data["on_page"] = this.on_page ? AppendixOnPageLimitsRatesDataInfo.fromJS(this.on_page)?.toJSON() : <any>undefined;
        data["total_on_page"] = this.total_on_page;
        data["business_data"] = this.business_data ? AppendixBusinessDataLimitsRatesDataInfo.fromJS(this.business_data)?.toJSON() : <any>undefined;
        data["total_business_data"] = this.total_business_data;
        data["backlinks"] = this.backlinks ? AppendixBacklinksLimitsRatesDataInfo.fromJS(this.backlinks)?.toJSON() : <any>undefined;
        data["total_backlinks"] = this.total_backlinks;
        data["app_data"] = this.app_data ? AppendixAppDataLimitsRatesDataInfo.fromJS(this.app_data)?.toJSON() : <any>undefined;
        data["total_app_data"] = this.total_app_data;
        data["content_analysis"] = this.content_analysis ? AppendixContentAnalysisLimitsRatesDataInfo.fromJS(this.content_analysis)?.toJSON() : <any>undefined;
        data["total_content_analysis"] = this.total_content_analysis;
        data["content_generation"] = this.content_generation ? AppendixContentGenerationLimitsRatesDataInfo.fromJS(this.content_generation)?.toJSON() : <any>undefined;
        data["total_content_generation"] = this.total_content_generation;
        data["value"] = this.value;
        return data;
    }
}