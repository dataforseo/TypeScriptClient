import { AppendixWhoisDomainAnalyticsPriceData, IAppendixWhoisDomainAnalyticsPriceData } from "./AppendixWhoisDomainAnalyticsPriceData";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixTechnologiesDomainAnalyticsPriceData, IAppendixTechnologiesDomainAnalyticsPriceData } from "./AppendixTechnologiesDomainAnalyticsPriceData";


export interface IAppendixDomainAnalyticsPriceData   {
        
        whois?: AppendixWhoisDomainAnalyticsPriceData | undefined
        
        available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        technologies?: AppendixTechnologiesDomainAnalyticsPriceData | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixDomainAnalyticsPriceData  implements IAppendixDomainAnalyticsPriceData {

    whois?: AppendixWhoisDomainAnalyticsPriceData | undefined;

    available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    technologies?: AppendixTechnologiesDomainAnalyticsPriceData | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixDomainAnalyticsPriceData) {

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
            this.whois = data["whois"] ? AppendixWhoisDomainAnalyticsPriceData.fromJS(data["whois"]) : <any>undefined;
            this.available_filters = data["available_filters"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["available_filters"]) : <any>undefined;
            this.technologies = data["technologies"] ? AppendixTechnologiesDomainAnalyticsPriceData.fromJS(data["technologies"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixDomainAnalyticsPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixDomainAnalyticsPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["whois"] = this.whois ? AppendixWhoisDomainAnalyticsPriceData.fromJS(this.whois)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.available_filters)?.toJSON() : <any>undefined;
        data["technologies"] = this.technologies ? AppendixTechnologiesDomainAnalyticsPriceData.fromJS(this.technologies)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}