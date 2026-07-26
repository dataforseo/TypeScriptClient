import { MetricsBundleInfo, IMetricsBundleInfo } from "./MetricsBundleInfo";
import { BacklinksInfo, IBacklinksInfo } from "./BacklinksInfo";


export interface IDomainAnalyticsWhoisOverviewLiveItem   {
        
        /** *domain name* */
        domain?: string | undefined
        
        /** *date and time of registration* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain was first registered  example:  `'1997-03-29 03:00:00 +00:00'` */
        created_datetime?: string | undefined
        
        /** *date and time when the domain entry was changed* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain entry was last modified example:  `'2021-01-14 08:36:28 +00:00'` */
        changed_datetime?: string | undefined
        
        /** *date and time when the domain will expire* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain is due to expire  example:  `'2022-11-26 17:21:23 +00:00'` */
        expiration_datetime?: string | undefined
        
        /** *date and time when the domain was updated* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain was last updated  example:  `'2021-01-29 13:59:38 +00:00'` */
        updated_datetime?: string | undefined
        
        /** *date and time when our crawler found the domain for the first time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example:  `'2019-11-15 12:57:46 +00:00'` */
        first_seen?: string | undefined
        
        /** *extensive provisioning protocol status codes* the status of a domain name registration [as defined by ICANN](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) */
        epp_status_codes?: string[] | undefined
        
        /** *top-level domain* top-level domain in the [DNS root zone](https://www.iana.org/domains/root/db) */
        tld?: string | undefined
        
        /** *domain registration status* if `false`, the domain name registration has expired **Note: expired domains will remain in the database for only a short period of time** */
        registered?: boolean | undefined
        
        /** *domain registrar* if `null`, the domain registrar is unknown example: `NameCheap, Inc.` */
        registrar?: string | undefined
        
        /** *ranking data relevant to the specified domain* */
        metrics?: MetricsBundleInfo | undefined
        
        /** *backlink data for the returned domain* */
        backlinks_info?: BacklinksInfo | undefined

    [key: string]: any;

    }

export class DomainAnalyticsWhoisOverviewLiveItem  implements IDomainAnalyticsWhoisOverviewLiveItem {

    
    /** *domain name* */

    domain?: string | undefined;

    
    /** *date and time of registration* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain was first registered  example:  `'1997-03-29 03:00:00 +00:00'` */

    created_datetime?: string | undefined;

    
    /** *date and time when the domain entry was changed* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain entry was last modified example:  `'2021-01-14 08:36:28 +00:00'` */

    changed_datetime?: string | undefined;

    
    /** *date and time when the domain will expire* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain is due to expire  example:  `'2022-11-26 17:21:23 +00:00'` */

    expiration_datetime?: string | undefined;

    
    /** *date and time when the domain was updated* date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain was last updated  example:  `'2021-01-29 13:59:38 +00:00'` */

    updated_datetime?: string | undefined;

    
    /** *date and time when our crawler found the domain for the first time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example:  `'2019-11-15 12:57:46 +00:00'` */

    first_seen?: string | undefined;

    
    /** *extensive provisioning protocol status codes* the status of a domain name registration [as defined by ICANN](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) */

    epp_status_codes?: string[] | undefined;

    
    /** *top-level domain* top-level domain in the [DNS root zone](https://www.iana.org/domains/root/db) */

    tld?: string | undefined;

    
    /** *domain registration status* if `false`, the domain name registration has expired **Note: expired domains will remain in the database for only a short period of time** */

    registered?: boolean | undefined;

    
    /** *domain registrar* if `null`, the domain registrar is unknown example: `NameCheap, Inc.` */

    registrar?: string | undefined;

    
    /** *ranking data relevant to the specified domain* */

    metrics?: MetricsBundleInfo | undefined;

    
    /** *backlink data for the returned domain* */

    backlinks_info?: BacklinksInfo | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsWhoisOverviewLiveItem) {

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
            this.domain = data["domain"];
            this.created_datetime = data["created_datetime"];
            this.changed_datetime = data["changed_datetime"];
            this.expiration_datetime = data["expiration_datetime"];
            this.updated_datetime = data["updated_datetime"];
            this.first_seen = data["first_seen"];
            this.epp_status_codes = data["epp_status_codes"];
            this.tld = data["tld"];
            this.registered = data["registered"];
            this.registrar = data["registrar"];
            this.metrics = data["metrics"] ? MetricsBundleInfo.fromJS(data["metrics"]) : <any>undefined;
            this.backlinks_info = data["backlinks_info"] ? BacklinksInfo.fromJS(data["backlinks_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DomainAnalyticsWhoisOverviewLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsWhoisOverviewLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domain"] = this.domain;
        data["created_datetime"] = this.created_datetime;
        data["changed_datetime"] = this.changed_datetime;
        data["expiration_datetime"] = this.expiration_datetime;
        data["updated_datetime"] = this.updated_datetime;
        data["first_seen"] = this.first_seen;
        data["epp_status_codes"] = this.epp_status_codes;
        data["tld"] = this.tld;
        data["registered"] = this.registered;
        data["registrar"] = this.registrar;
        data["metrics"] = this.metrics ? MetricsBundleInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        data["backlinks_info"] = this.backlinks_info ? BacklinksInfo.fromJS(this.backlinks_info)?.toJSON() : <any>undefined;
        return data;
    }
}