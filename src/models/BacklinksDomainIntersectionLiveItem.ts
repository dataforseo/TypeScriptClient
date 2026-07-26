import { IntersectionSummaryInfo, IIntersectionSummaryInfo } from "./IntersectionSummaryInfo";
import { BacklinksDomainIntersection, IBacklinksDomainIntersection } from "./BacklinksDomainIntersection";


export interface IBacklinksDomainIntersectionLiveItem   {
        
        /** *contains data on domains that link to the corresponding targets specified in the POST array* data is provided in separate objects corresponding to domains, subdomains or pages specified in the `targets` object */
        domain_intersection?: { [key: string]: BacklinksDomainIntersection; } | undefined
        
        /** *contains the domain intersections summary* */
        summary?: IntersectionSummaryInfo | undefined

    [key: string]: any;

    }

export class BacklinksDomainIntersectionLiveItem  implements IBacklinksDomainIntersectionLiveItem {

    
    /** *contains data on domains that link to the corresponding targets specified in the POST array* data is provided in separate objects corresponding to domains, subdomains or pages specified in the `targets` object */

    domain_intersection?: { [key: string]: BacklinksDomainIntersection; } | undefined;

    
    /** *contains the domain intersections summary* */

    summary?: IntersectionSummaryInfo | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainIntersectionLiveItem) {

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
            this.domain_intersection = data["domain_intersection"];
            this.summary = data["summary"] ? IntersectionSummaryInfo.fromJS(data["summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BacklinksDomainIntersectionLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainIntersectionLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domain_intersection"] = this.domain_intersection;
        data["summary"] = this.summary ? IntersectionSummaryInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        return data;
    }
}