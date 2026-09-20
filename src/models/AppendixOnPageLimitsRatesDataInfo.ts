import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixOnPageLimitsRatesDataInfo   {
        
        task_post?: number | undefined
        
        tasks_ready?: number | undefined
        
        summary?: number | undefined
        
        resources?: number | undefined
        
        pages?: number | undefined
        
        non_indexable?: number | undefined
        
        duplicate_tags?: number | undefined
        
        links?: number | undefined
        
        waterfall?: number | undefined
        
        errors?: number | undefined
        
        pages_by_resource?: number | undefined
        
        duplicate_content?: number | undefined
        
        raw_html?: number | undefined
        
        instant_pages?: number | undefined
        
        redirect_chains?: number | undefined
        
        lighthouse?: AppendixInfo | undefined
        
        available_filters?: number | undefined
        
        keyword_density?: number | undefined
        
        page_screenshot?: number | undefined
        
        content_parsing?: number | undefined
        
        content_parsing_live?: number | undefined
        
        id_list?: number | undefined
        
        uncrawlable_resources?: number | undefined

    [key: string]: any;

    }

export class AppendixOnPageLimitsRatesDataInfo  implements IAppendixOnPageLimitsRatesDataInfo {

    task_post?: number | undefined;

    tasks_ready?: number | undefined;

    summary?: number | undefined;

    resources?: number | undefined;

    pages?: number | undefined;

    non_indexable?: number | undefined;

    duplicate_tags?: number | undefined;

    links?: number | undefined;

    waterfall?: number | undefined;

    errors?: number | undefined;

    pages_by_resource?: number | undefined;

    duplicate_content?: number | undefined;

    raw_html?: number | undefined;

    instant_pages?: number | undefined;

    redirect_chains?: number | undefined;

    lighthouse?: AppendixInfo | undefined;

    available_filters?: number | undefined;

    keyword_density?: number | undefined;

    page_screenshot?: number | undefined;

    content_parsing?: number | undefined;

    content_parsing_live?: number | undefined;

    id_list?: number | undefined;

    uncrawlable_resources?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixOnPageLimitsRatesDataInfo) {

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
            this.task_post = data["task_post"];
            this.tasks_ready = data["tasks_ready"];
            this.summary = data["summary"];
            this.resources = data["resources"];
            this.pages = data["pages"];
            this.non_indexable = data["non_indexable"];
            this.duplicate_tags = data["duplicate_tags"];
            this.links = data["links"];
            this.waterfall = data["waterfall"];
            this.errors = data["errors"];
            this.pages_by_resource = data["pages_by_resource"];
            this.duplicate_content = data["duplicate_content"];
            this.raw_html = data["raw_html"];
            this.instant_pages = data["instant_pages"];
            this.redirect_chains = data["redirect_chains"];
            this.lighthouse = data["lighthouse"] ? AppendixInfo.fromJS(data["lighthouse"]) : <any>undefined;
            this.available_filters = data["available_filters"];
            this.keyword_density = data["keyword_density"];
            this.page_screenshot = data["page_screenshot"];
            this.content_parsing = data["content_parsing"];
            this.content_parsing_live = data["content_parsing_live"];
            this.id_list = data["id_list"];
            this.uncrawlable_resources = data["uncrawlable_resources"];
        }
    }

    static fromJS(data: any): AppendixOnPageLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixOnPageLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_post"] = this.task_post;
        data["tasks_ready"] = this.tasks_ready;
        data["summary"] = this.summary;
        data["resources"] = this.resources;
        data["pages"] = this.pages;
        data["non_indexable"] = this.non_indexable;
        data["duplicate_tags"] = this.duplicate_tags;
        data["links"] = this.links;
        data["waterfall"] = this.waterfall;
        data["errors"] = this.errors;
        data["pages_by_resource"] = this.pages_by_resource;
        data["duplicate_content"] = this.duplicate_content;
        data["raw_html"] = this.raw_html;
        data["instant_pages"] = this.instant_pages;
        data["redirect_chains"] = this.redirect_chains;
        data["lighthouse"] = this.lighthouse ? AppendixInfo.fromJS(this.lighthouse)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters;
        data["keyword_density"] = this.keyword_density;
        data["page_screenshot"] = this.page_screenshot;
        data["content_parsing"] = this.content_parsing;
        data["content_parsing_live"] = this.content_parsing_live;
        data["id_list"] = this.id_list;
        data["uncrawlable_resources"] = this.uncrawlable_resources;
        return data;
    }
}