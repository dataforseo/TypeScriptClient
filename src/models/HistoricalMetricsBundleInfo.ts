import { HistoricalMetricsInfo, IHistoricalMetricsInfo } from "./HistoricalMetricsInfo";


export interface IHistoricalMetricsBundleInfo   {
        
        /** traffic data from organic search */
        organic?: HistoricalMetricsInfo[] | undefined
        
        /** traffic data from paid search */
        paid?: HistoricalMetricsInfo[] | undefined
        
        /** traffic data from the local pack results in SERP */
        local_pack?: HistoricalMetricsInfo[] | undefined
        
        /** traffic data from the featured snippet results in Google SERP */
        featured_snippet?: HistoricalMetricsInfo[] | undefined

    [key: string]: any;

    }

export class HistoricalMetricsBundleInfo  implements IHistoricalMetricsBundleInfo {

    
    /** traffic data from organic search */

    organic?: HistoricalMetricsInfo[] | undefined;

    
    /** traffic data from paid search */

    paid?: HistoricalMetricsInfo[] | undefined;

    
    /** traffic data from the local pack results in SERP */

    local_pack?: HistoricalMetricsInfo[] | undefined;

    
    /** traffic data from the featured snippet results in Google SERP */

    featured_snippet?: HistoricalMetricsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IHistoricalMetricsBundleInfo) {

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
            if (Array.isArray(data["organic"])) {
                this.organic = [];
                for (let item of data["organic"]) {
                    this.organic.push(HistoricalMetricsInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["paid"])) {
                this.paid = [];
                for (let item of data["paid"]) {
                    this.paid.push(HistoricalMetricsInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["local_pack"])) {
                this.local_pack = [];
                for (let item of data["local_pack"]) {
                    this.local_pack.push(HistoricalMetricsInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["featured_snippet"])) {
                this.featured_snippet = [];
                for (let item of data["featured_snippet"]) {
                    this.featured_snippet.push(HistoricalMetricsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HistoricalMetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HistoricalMetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["organic"] = null;
        if (Array.isArray(this.organic)) {
            data["organic"] = [];
            for (let item of this.organic) {
                if (item && typeof item.toJSON === "function") {
                    data["organic"].push(item?.toJSON());
                }
            }
        }
        data["paid"] = null;
        if (Array.isArray(this.paid)) {
            data["paid"] = [];
            for (let item of this.paid) {
                if (item && typeof item.toJSON === "function") {
                    data["paid"].push(item?.toJSON());
                }
            }
        }
        data["local_pack"] = null;
        if (Array.isArray(this.local_pack)) {
            data["local_pack"] = [];
            for (let item of this.local_pack) {
                if (item && typeof item.toJSON === "function") {
                    data["local_pack"].push(item?.toJSON());
                }
            }
        }
        data["featured_snippet"] = null;
        if (Array.isArray(this.featured_snippet)) {
            data["featured_snippet"] = [];
            for (let item of this.featured_snippet) {
                if (item && typeof item.toJSON === "function") {
                    data["featured_snippet"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}