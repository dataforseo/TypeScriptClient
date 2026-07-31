import { BulkMetricsInfo, IBulkMetricsInfo } from "./BulkMetricsInfo";


export interface IBulkMetricsBundleInfo   {
        
        /** *traffic data from organic search* */
        organic?: BulkMetricsInfo | undefined
        
        /** *traffic data from paid search* */
        paid?: BulkMetricsInfo | undefined
        
        /** *traffic data from the local pack results in SERP* */
        local_pack?: BulkMetricsInfo | undefined
        
        /** *traffic data from the featured snippet results in Google SERP* */
        featured_snippet?: BulkMetricsInfo | undefined

    [key: string]: any;

    }

export class BulkMetricsBundleInfo  implements IBulkMetricsBundleInfo {

    
    /** *traffic data from organic search* */

    organic?: BulkMetricsInfo | undefined;

    
    /** *traffic data from paid search* */

    paid?: BulkMetricsInfo | undefined;

    
    /** *traffic data from the local pack results in SERP* */

    local_pack?: BulkMetricsInfo | undefined;

    
    /** *traffic data from the featured snippet results in Google SERP* */

    featured_snippet?: BulkMetricsInfo | undefined;

    [key: string]: any;


    constructor(data?: IBulkMetricsBundleInfo) {

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
            this.organic = data["organic"] ? BulkMetricsInfo.fromJS(data["organic"]) : <any>undefined;
            this.paid = data["paid"] ? BulkMetricsInfo.fromJS(data["paid"]) : <any>undefined;
            this.local_pack = data["local_pack"] ? BulkMetricsInfo.fromJS(data["local_pack"]) : <any>undefined;
            this.featured_snippet = data["featured_snippet"] ? BulkMetricsInfo.fromJS(data["featured_snippet"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BulkMetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BulkMetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["organic"] = this.organic ? BulkMetricsInfo.fromJS(this.organic)?.toJSON() : <any>undefined;
        data["paid"] = this.paid ? BulkMetricsInfo.fromJS(this.paid)?.toJSON() : <any>undefined;
        data["local_pack"] = this.local_pack ? BulkMetricsInfo.fromJS(this.local_pack)?.toJSON() : <any>undefined;
        data["featured_snippet"] = this.featured_snippet ? BulkMetricsInfo.fromJS(this.featured_snippet)?.toJSON() : <any>undefined;
        return data;
    }
}