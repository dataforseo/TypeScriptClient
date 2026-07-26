export interface IIntersectionSummaryInfo   {
        
        /** *total number of intersections* */
        intersections_count?: number | undefined

    [key: string]: any;

    }

export class IntersectionSummaryInfo  implements IIntersectionSummaryInfo {

    
    /** *total number of intersections* */

    intersections_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IIntersectionSummaryInfo) {

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
            this.intersections_count = data["intersections_count"];
        }
    }

    static fromJS(data: any): IntersectionSummaryInfo {
        data = typeof data === 'object' ? data : {};


        let result = new IntersectionSummaryInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["intersections_count"] = this.intersections_count;
        return data;
    }
}