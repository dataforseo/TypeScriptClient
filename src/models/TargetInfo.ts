export interface ITargetInfo   {
        
        /** server */
        server?: string | undefined
        
        /** content management system */
        cms?: string | undefined
        
        /** platform type */
        platform_type?: string[] | undefined
        
        /** IP address of the target */
        ip_address?: string | undefined
        
        /** country code that the target domain is determined to belong to */
        country?: string | undefined
        
        /** indicates if the target is IP if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name */
        is_ip?: boolean | undefined
        
        /** spam score of the target if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain; learn more about how the metric is calculated on this help center page */
        target_spam_score?: number | undefined

    [key: string]: any;

    }

export class TargetInfo  implements ITargetInfo {

    
    /** server */

    server?: string | undefined;

    
    /** content management system */

    cms?: string | undefined;

    
    /** platform type */

    platform_type?: string[] | undefined;

    
    /** IP address of the target */

    ip_address?: string | undefined;

    
    /** country code that the target domain is determined to belong to */

    country?: string | undefined;

    
    /** indicates if the target is IP if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name */

    is_ip?: boolean | undefined;

    
    /** spam score of the target if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain; learn more about how the metric is calculated on this help center page */

    target_spam_score?: number | undefined;

    [key: string]: any;


    constructor(data?: ITargetInfo) {

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
            this.server = data["server"];
            this.cms = data["cms"];
            this.platform_type = data["platform_type"];
            this.ip_address = data["ip_address"];
            this.country = data["country"];
            this.is_ip = data["is_ip"];
            this.target_spam_score = data["target_spam_score"];
        }
    }

    static fromJS(data: any): TargetInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TargetInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["server"] = this.server;
        data["cms"] = this.cms;
        data["platform_type"] = this.platform_type;
        data["ip_address"] = this.ip_address;
        data["country"] = this.country;
        data["is_ip"] = this.is_ip;
        data["target_spam_score"] = this.target_spam_score;
        return data;
    }
}