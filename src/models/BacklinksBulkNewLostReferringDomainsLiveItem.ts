export interface IBacklinksBulkNewLostReferringDomainsLiveItem   {
        
        /** *domain, subdomain or webpage from a POST array* */
        target?: string | undefined
        
        /** *number of new referring domains* number of new referring domains pointing to the `target` */
        new_referring_domains?: number | undefined
        
        /** *number of lost referring domains* number of lost referring domains of the `target` */
        lost_referring_domains?: number | undefined
        
        /** *number of new referring main domains pointing to the `target`* */
        new_referring_main_domains?: number | undefined
        
        /** *number of lost referring main domains pointing to the `target`* */
        lost_referring_main_domains?: number | undefined

    [key: string]: any;

    }

export class BacklinksBulkNewLostReferringDomainsLiveItem  implements IBacklinksBulkNewLostReferringDomainsLiveItem {

    
    /** *domain, subdomain or webpage from a POST array* */

    target?: string | undefined;

    
    /** *number of new referring domains* number of new referring domains pointing to the `target` */

    new_referring_domains?: number | undefined;

    
    /** *number of lost referring domains* number of lost referring domains of the `target` */

    lost_referring_domains?: number | undefined;

    
    /** *number of new referring main domains pointing to the `target`* */

    new_referring_main_domains?: number | undefined;

    
    /** *number of lost referring main domains pointing to the `target`* */

    lost_referring_main_domains?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkNewLostReferringDomainsLiveItem) {

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
            this.new_referring_domains = data["new_referring_domains"];
            this.lost_referring_domains = data["lost_referring_domains"];
            this.new_referring_main_domains = data["new_referring_main_domains"];
            this.lost_referring_main_domains = data["lost_referring_main_domains"];
        }
    }

    static fromJS(data: any): BacklinksBulkNewLostReferringDomainsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkNewLostReferringDomainsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["new_referring_domains"] = this.new_referring_domains;
        data["lost_referring_domains"] = this.lost_referring_domains;
        data["new_referring_main_domains"] = this.new_referring_main_domains;
        data["lost_referring_main_domains"] = this.lost_referring_main_domains;
        return data;
    }
}