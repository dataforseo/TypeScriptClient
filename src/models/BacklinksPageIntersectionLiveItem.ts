import { IntersectionSummaryInfo, IIntersectionSummaryInfo } from "./IntersectionSummaryInfo";
import { BacklinksPageIntersection, IBacklinksPageIntersection } from "./BacklinksPageIntersection";


export interface IBacklinksPageIntersectionLiveItem   {
        
        /** contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object */
        page_intersection?: { [key: string]: BacklinksPageIntersection[]; } | undefined
        
        /** contains the page intersections summary */
        summary?: IntersectionSummaryInfo | undefined

    [key: string]: any;

    }

export class BacklinksPageIntersectionLiveItem  implements IBacklinksPageIntersectionLiveItem {

    
    /** contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object */

    page_intersection?: { [key: string]: BacklinksPageIntersection[]; } | undefined;

    
    /** contains the page intersections summary */

    summary?: IntersectionSummaryInfo | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksPageIntersectionLiveItem) {

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
            this.page_intersection = data["page_intersection"];
            this.summary = data["summary"] ? IntersectionSummaryInfo.fromJS(data["summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BacklinksPageIntersectionLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksPageIntersectionLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page_intersection"] = this.page_intersection;
        data["summary"] = this.summary ? IntersectionSummaryInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        return data;
    }
}