import { AppendixWhoisDomainAnalyticsLimitsRatesDataInfo, IAppendixWhoisDomainAnalyticsLimitsRatesDataInfo } from "./AppendixWhoisDomainAnalyticsLimitsRatesDataInfo";
import { AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo, IAppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo } from "./AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo";


export interface IAppendixDomainAnalyticsLimitsRatesDataInfo   {
        
        tasks_ready?: number | undefined
        
        errors?: number | undefined
        
        whois?: AppendixWhoisDomainAnalyticsLimitsRatesDataInfo | undefined
        
        technologies?: AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo | undefined
        
        available_filters?: number | undefined

    [key: string]: any;

    }

export class AppendixDomainAnalyticsLimitsRatesDataInfo  implements IAppendixDomainAnalyticsLimitsRatesDataInfo {

    tasks_ready?: number | undefined;

    errors?: number | undefined;

    whois?: AppendixWhoisDomainAnalyticsLimitsRatesDataInfo | undefined;

    technologies?: AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo | undefined;

    available_filters?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixDomainAnalyticsLimitsRatesDataInfo) {

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
            this.tasks_ready = data["tasks_ready"];
            this.errors = data["errors"];
            this.whois = data["whois"] ? AppendixWhoisDomainAnalyticsLimitsRatesDataInfo.fromJS(data["whois"]) : <any>undefined;
            this.technologies = data["technologies"] ? AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo.fromJS(data["technologies"]) : <any>undefined;
            this.available_filters = data["available_filters"];
        }
    }

    static fromJS(data: any): AppendixDomainAnalyticsLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixDomainAnalyticsLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["tasks_ready"] = this.tasks_ready;
        data["errors"] = this.errors;
        data["whois"] = this.whois ? AppendixWhoisDomainAnalyticsLimitsRatesDataInfo.fromJS(this.whois)?.toJSON() : <any>undefined;
        data["technologies"] = this.technologies ? AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo.fromJS(this.technologies)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters;
        return data;
    }
}