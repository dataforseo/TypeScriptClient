export interface IBacklinksTimeseriesNewLostSummaryLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *date and time when the data for the target was stored* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */
        date?: string | undefined
        
        /** *number of new backlinks* number of new backlinks pointing to the `target` */
        new_backlinks?: number | undefined
        
        /** *number of lost backlinks* number of lost backlinks of the `target` */
        lost_backlinks?: number | undefined
        
        /** *number of new referring domains* number of new referring domains pointing to the `target` */
        new_referring_domains?: number | undefined
        
        /** *number of lost referring domains* number of lost referring domains of the `target` */
        lost_referring_domains?: number | undefined
        
        /** *number of new referring main domains* number of new referring main domains pointing to the `target` */
        new_referring_main_domains?: number | undefined
        
        /** *number of lost referring main domains* number of lost referring main domains of the `target` */
        lost_referring_main_domains?: number | undefined

    [key: string]: any;

    }

export class BacklinksTimeseriesNewLostSummaryLiveItem  implements IBacklinksTimeseriesNewLostSummaryLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *date and time when the data for the target was stored* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */

    date?: string | undefined;

    
    /** *number of new backlinks* number of new backlinks pointing to the `target` */

    new_backlinks?: number | undefined;

    
    /** *number of lost backlinks* number of lost backlinks of the `target` */

    lost_backlinks?: number | undefined;

    
    /** *number of new referring domains* number of new referring domains pointing to the `target` */

    new_referring_domains?: number | undefined;

    
    /** *number of lost referring domains* number of lost referring domains of the `target` */

    lost_referring_domains?: number | undefined;

    
    /** *number of new referring main domains* number of new referring main domains pointing to the `target` */

    new_referring_main_domains?: number | undefined;

    
    /** *number of lost referring main domains* number of lost referring main domains of the `target` */

    lost_referring_main_domains?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksTimeseriesNewLostSummaryLiveItem) {

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
            this.type = data["type"];
            this.date = data["date"];
            this.new_backlinks = data["new_backlinks"];
            this.lost_backlinks = data["lost_backlinks"];
            this.new_referring_domains = data["new_referring_domains"];
            this.lost_referring_domains = data["lost_referring_domains"];
            this.new_referring_main_domains = data["new_referring_main_domains"];
            this.lost_referring_main_domains = data["lost_referring_main_domains"];
        }
    }

    static fromJS(data: any): BacklinksTimeseriesNewLostSummaryLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksTimeseriesNewLostSummaryLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["date"] = this.date;
        data["new_backlinks"] = this.new_backlinks;
        data["lost_backlinks"] = this.lost_backlinks;
        data["new_referring_domains"] = this.new_referring_domains;
        data["lost_referring_domains"] = this.lost_referring_domains;
        data["new_referring_main_domains"] = this.new_referring_main_domains;
        data["lost_referring_main_domains"] = this.lost_referring_main_domains;
        return data;
    }
}