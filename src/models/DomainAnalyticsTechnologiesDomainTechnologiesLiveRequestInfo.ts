export interface IDomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo   {
        
        /** target domain required field domain name of the website to analyze Note: results will be returned for the specified domain only */
        target?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo  implements IDomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo {

    
    /** target domain required field domain name of the website to analyze Note: results will be returned for the specified domain only */

    target?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo) {

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
            this.target = data["target"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        return data;
    }
}