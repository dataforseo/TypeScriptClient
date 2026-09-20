import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixBacklinksLimitsRatesDataInfo   {
        
        summary?: AppendixInfo | undefined
        
        history?: AppendixInfo | undefined
        
        content_duplicates?: AppendixInfo | undefined
        
        domain_intersection?: AppendixInfo | undefined
        
        backlinks?: AppendixInfo | undefined
        
        domain_pages?: AppendixInfo | undefined
        
        domain_backlinks?: AppendixInfo | undefined
        
        anchors?: AppendixInfo | undefined
        
        referring_domains?: AppendixInfo | undefined
        
        links_intersection?: AppendixInfo | undefined
        
        page_intersection?: AppendixInfo | undefined
        
        available_filters?: number | undefined
        
        referring_networks?: AppendixInfo | undefined
        
        bulk_ranks?: AppendixInfo | undefined
        
        bulk_backlinks?: AppendixInfo | undefined
        
        bulk_new_lost_backlinks?: AppendixInfo | undefined
        
        bulk_new_lost_referring_domains?: AppendixInfo | undefined
        
        bulk_referring_domains?: AppendixInfo | undefined
        
        errors?: number | undefined
        
        domain_pages_summary?: AppendixInfo | undefined
        
        timeseries_summary?: AppendixInfo | undefined
        
        timeseries_new_lost_summary?: AppendixInfo | undefined
        
        competitors?: AppendixInfo | undefined
        
        bulk_spam_score?: AppendixInfo | undefined
        
        id_list?: number | undefined
        
        bulk_pages_summary?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixBacklinksLimitsRatesDataInfo  implements IAppendixBacklinksLimitsRatesDataInfo {

    summary?: AppendixInfo | undefined;

    history?: AppendixInfo | undefined;

    content_duplicates?: AppendixInfo | undefined;

    domain_intersection?: AppendixInfo | undefined;

    backlinks?: AppendixInfo | undefined;

    domain_pages?: AppendixInfo | undefined;

    domain_backlinks?: AppendixInfo | undefined;

    anchors?: AppendixInfo | undefined;

    referring_domains?: AppendixInfo | undefined;

    links_intersection?: AppendixInfo | undefined;

    page_intersection?: AppendixInfo | undefined;

    available_filters?: number | undefined;

    referring_networks?: AppendixInfo | undefined;

    bulk_ranks?: AppendixInfo | undefined;

    bulk_backlinks?: AppendixInfo | undefined;

    bulk_new_lost_backlinks?: AppendixInfo | undefined;

    bulk_new_lost_referring_domains?: AppendixInfo | undefined;

    bulk_referring_domains?: AppendixInfo | undefined;

    errors?: number | undefined;

    domain_pages_summary?: AppendixInfo | undefined;

    timeseries_summary?: AppendixInfo | undefined;

    timeseries_new_lost_summary?: AppendixInfo | undefined;

    competitors?: AppendixInfo | undefined;

    bulk_spam_score?: AppendixInfo | undefined;

    id_list?: number | undefined;

    bulk_pages_summary?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBacklinksLimitsRatesDataInfo) {

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
            this.summary = data["summary"] ? AppendixInfo.fromJS(data["summary"]) : <any>undefined;
            this.history = data["history"] ? AppendixInfo.fromJS(data["history"]) : <any>undefined;
            this.content_duplicates = data["content_duplicates"] ? AppendixInfo.fromJS(data["content_duplicates"]) : <any>undefined;
            this.domain_intersection = data["domain_intersection"] ? AppendixInfo.fromJS(data["domain_intersection"]) : <any>undefined;
            this.backlinks = data["backlinks"] ? AppendixInfo.fromJS(data["backlinks"]) : <any>undefined;
            this.domain_pages = data["domain_pages"] ? AppendixInfo.fromJS(data["domain_pages"]) : <any>undefined;
            this.domain_backlinks = data["domain_backlinks"] ? AppendixInfo.fromJS(data["domain_backlinks"]) : <any>undefined;
            this.anchors = data["anchors"] ? AppendixInfo.fromJS(data["anchors"]) : <any>undefined;
            this.referring_domains = data["referring_domains"] ? AppendixInfo.fromJS(data["referring_domains"]) : <any>undefined;
            this.links_intersection = data["links_intersection"] ? AppendixInfo.fromJS(data["links_intersection"]) : <any>undefined;
            this.page_intersection = data["page_intersection"] ? AppendixInfo.fromJS(data["page_intersection"]) : <any>undefined;
            this.available_filters = data["available_filters"];
            this.referring_networks = data["referring_networks"] ? AppendixInfo.fromJS(data["referring_networks"]) : <any>undefined;
            this.bulk_ranks = data["bulk_ranks"] ? AppendixInfo.fromJS(data["bulk_ranks"]) : <any>undefined;
            this.bulk_backlinks = data["bulk_backlinks"] ? AppendixInfo.fromJS(data["bulk_backlinks"]) : <any>undefined;
            this.bulk_new_lost_backlinks = data["bulk_new_lost_backlinks"] ? AppendixInfo.fromJS(data["bulk_new_lost_backlinks"]) : <any>undefined;
            this.bulk_new_lost_referring_domains = data["bulk_new_lost_referring_domains"] ? AppendixInfo.fromJS(data["bulk_new_lost_referring_domains"]) : <any>undefined;
            this.bulk_referring_domains = data["bulk_referring_domains"] ? AppendixInfo.fromJS(data["bulk_referring_domains"]) : <any>undefined;
            this.errors = data["errors"];
            this.domain_pages_summary = data["domain_pages_summary"] ? AppendixInfo.fromJS(data["domain_pages_summary"]) : <any>undefined;
            this.timeseries_summary = data["timeseries_summary"] ? AppendixInfo.fromJS(data["timeseries_summary"]) : <any>undefined;
            this.timeseries_new_lost_summary = data["timeseries_new_lost_summary"] ? AppendixInfo.fromJS(data["timeseries_new_lost_summary"]) : <any>undefined;
            this.competitors = data["competitors"] ? AppendixInfo.fromJS(data["competitors"]) : <any>undefined;
            this.bulk_spam_score = data["bulk_spam_score"] ? AppendixInfo.fromJS(data["bulk_spam_score"]) : <any>undefined;
            this.id_list = data["id_list"];
            this.bulk_pages_summary = data["bulk_pages_summary"] ? AppendixInfo.fromJS(data["bulk_pages_summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBacklinksLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBacklinksLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["summary"] = this.summary ? AppendixInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        data["history"] = this.history ? AppendixInfo.fromJS(this.history)?.toJSON() : <any>undefined;
        data["content_duplicates"] = this.content_duplicates ? AppendixInfo.fromJS(this.content_duplicates)?.toJSON() : <any>undefined;
        data["domain_intersection"] = this.domain_intersection ? AppendixInfo.fromJS(this.domain_intersection)?.toJSON() : <any>undefined;
        data["backlinks"] = this.backlinks ? AppendixInfo.fromJS(this.backlinks)?.toJSON() : <any>undefined;
        data["domain_pages"] = this.domain_pages ? AppendixInfo.fromJS(this.domain_pages)?.toJSON() : <any>undefined;
        data["domain_backlinks"] = this.domain_backlinks ? AppendixInfo.fromJS(this.domain_backlinks)?.toJSON() : <any>undefined;
        data["anchors"] = this.anchors ? AppendixInfo.fromJS(this.anchors)?.toJSON() : <any>undefined;
        data["referring_domains"] = this.referring_domains ? AppendixInfo.fromJS(this.referring_domains)?.toJSON() : <any>undefined;
        data["links_intersection"] = this.links_intersection ? AppendixInfo.fromJS(this.links_intersection)?.toJSON() : <any>undefined;
        data["page_intersection"] = this.page_intersection ? AppendixInfo.fromJS(this.page_intersection)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters;
        data["referring_networks"] = this.referring_networks ? AppendixInfo.fromJS(this.referring_networks)?.toJSON() : <any>undefined;
        data["bulk_ranks"] = this.bulk_ranks ? AppendixInfo.fromJS(this.bulk_ranks)?.toJSON() : <any>undefined;
        data["bulk_backlinks"] = this.bulk_backlinks ? AppendixInfo.fromJS(this.bulk_backlinks)?.toJSON() : <any>undefined;
        data["bulk_new_lost_backlinks"] = this.bulk_new_lost_backlinks ? AppendixInfo.fromJS(this.bulk_new_lost_backlinks)?.toJSON() : <any>undefined;
        data["bulk_new_lost_referring_domains"] = this.bulk_new_lost_referring_domains ? AppendixInfo.fromJS(this.bulk_new_lost_referring_domains)?.toJSON() : <any>undefined;
        data["bulk_referring_domains"] = this.bulk_referring_domains ? AppendixInfo.fromJS(this.bulk_referring_domains)?.toJSON() : <any>undefined;
        data["errors"] = this.errors;
        data["domain_pages_summary"] = this.domain_pages_summary ? AppendixInfo.fromJS(this.domain_pages_summary)?.toJSON() : <any>undefined;
        data["timeseries_summary"] = this.timeseries_summary ? AppendixInfo.fromJS(this.timeseries_summary)?.toJSON() : <any>undefined;
        data["timeseries_new_lost_summary"] = this.timeseries_new_lost_summary ? AppendixInfo.fromJS(this.timeseries_new_lost_summary)?.toJSON() : <any>undefined;
        data["competitors"] = this.competitors ? AppendixInfo.fromJS(this.competitors)?.toJSON() : <any>undefined;
        data["bulk_spam_score"] = this.bulk_spam_score ? AppendixInfo.fromJS(this.bulk_spam_score)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list;
        data["bulk_pages_summary"] = this.bulk_pages_summary ? AppendixInfo.fromJS(this.bulk_pages_summary)?.toJSON() : <any>undefined;
        return data;
    }
}