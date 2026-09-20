import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixBacklinksPriceData   {
        
        anchors?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_new_lost_backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_new_lost_referring_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_pages_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_ranks?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_referring_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        bulk_spam_score?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        competitors?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        content_duplicates?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domain_backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domain_intersection?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domain_pages?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domain_pages_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        history?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        links_intersection?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        page_intersection?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        referring_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        referring_networks?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        summary?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        timeseries_new_lost_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        timeseries_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixBacklinksPriceData  implements IAppendixBacklinksPriceData {

    anchors?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_new_lost_backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_new_lost_referring_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_pages_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_ranks?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_referring_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    bulk_spam_score?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    competitors?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    content_duplicates?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domain_backlinks?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domain_intersection?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domain_pages?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domain_pages_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    history?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    links_intersection?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    page_intersection?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    referring_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    referring_networks?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    timeseries_new_lost_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    timeseries_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBacklinksPriceData) {

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
            this.anchors = data["anchors"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["anchors"]) : <any>undefined;
            this.available_filters = data["available_filters"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["available_filters"]) : <any>undefined;
            this.backlinks = data["backlinks"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["backlinks"]) : <any>undefined;
            this.bulk_backlinks = data["bulk_backlinks"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_backlinks"]) : <any>undefined;
            this.bulk_new_lost_backlinks = data["bulk_new_lost_backlinks"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_new_lost_backlinks"]) : <any>undefined;
            this.bulk_new_lost_referring_domains = data["bulk_new_lost_referring_domains"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_new_lost_referring_domains"]) : <any>undefined;
            this.bulk_pages_summary = data["bulk_pages_summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_pages_summary"]) : <any>undefined;
            this.bulk_ranks = data["bulk_ranks"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_ranks"]) : <any>undefined;
            this.bulk_referring_domains = data["bulk_referring_domains"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_referring_domains"]) : <any>undefined;
            this.bulk_spam_score = data["bulk_spam_score"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_spam_score"]) : <any>undefined;
            this.competitors = data["competitors"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["competitors"]) : <any>undefined;
            this.content_duplicates = data["content_duplicates"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["content_duplicates"]) : <any>undefined;
            this.domain_backlinks = data["domain_backlinks"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domain_backlinks"]) : <any>undefined;
            this.domain_intersection = data["domain_intersection"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domain_intersection"]) : <any>undefined;
            this.domain_pages = data["domain_pages"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domain_pages"]) : <any>undefined;
            this.domain_pages_summary = data["domain_pages_summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domain_pages_summary"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.history = data["history"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["history"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.links_intersection = data["links_intersection"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["links_intersection"]) : <any>undefined;
            this.page_intersection = data["page_intersection"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["page_intersection"]) : <any>undefined;
            this.referring_domains = data["referring_domains"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["referring_domains"]) : <any>undefined;
            this.referring_networks = data["referring_networks"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["referring_networks"]) : <any>undefined;
            this.summary = data["summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["summary"]) : <any>undefined;
            this.timeseries_new_lost_summary = data["timeseries_new_lost_summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["timeseries_new_lost_summary"]) : <any>undefined;
            this.timeseries_summary = data["timeseries_summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["timeseries_summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBacklinksPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBacklinksPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["anchors"] = this.anchors ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.anchors)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.available_filters)?.toJSON() : <any>undefined;
        data["backlinks"] = this.backlinks ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.backlinks)?.toJSON() : <any>undefined;
        data["bulk_backlinks"] = this.bulk_backlinks ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_backlinks)?.toJSON() : <any>undefined;
        data["bulk_new_lost_backlinks"] = this.bulk_new_lost_backlinks ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_new_lost_backlinks)?.toJSON() : <any>undefined;
        data["bulk_new_lost_referring_domains"] = this.bulk_new_lost_referring_domains ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_new_lost_referring_domains)?.toJSON() : <any>undefined;
        data["bulk_pages_summary"] = this.bulk_pages_summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_pages_summary)?.toJSON() : <any>undefined;
        data["bulk_ranks"] = this.bulk_ranks ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_ranks)?.toJSON() : <any>undefined;
        data["bulk_referring_domains"] = this.bulk_referring_domains ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_referring_domains)?.toJSON() : <any>undefined;
        data["bulk_spam_score"] = this.bulk_spam_score ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_spam_score)?.toJSON() : <any>undefined;
        data["competitors"] = this.competitors ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.competitors)?.toJSON() : <any>undefined;
        data["content_duplicates"] = this.content_duplicates ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.content_duplicates)?.toJSON() : <any>undefined;
        data["domain_backlinks"] = this.domain_backlinks ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domain_backlinks)?.toJSON() : <any>undefined;
        data["domain_intersection"] = this.domain_intersection ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domain_intersection)?.toJSON() : <any>undefined;
        data["domain_pages"] = this.domain_pages ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domain_pages)?.toJSON() : <any>undefined;
        data["domain_pages_summary"] = this.domain_pages_summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domain_pages_summary)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["history"] = this.history ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.history)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["links_intersection"] = this.links_intersection ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.links_intersection)?.toJSON() : <any>undefined;
        data["page_intersection"] = this.page_intersection ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.page_intersection)?.toJSON() : <any>undefined;
        data["referring_domains"] = this.referring_domains ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.referring_domains)?.toJSON() : <any>undefined;
        data["referring_networks"] = this.referring_networks ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.referring_networks)?.toJSON() : <any>undefined;
        data["summary"] = this.summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        data["timeseries_new_lost_summary"] = this.timeseries_new_lost_summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.timeseries_new_lost_summary)?.toJSON() : <any>undefined;
        data["timeseries_summary"] = this.timeseries_summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.timeseries_summary)?.toJSON() : <any>undefined;
        return data;
    }
}