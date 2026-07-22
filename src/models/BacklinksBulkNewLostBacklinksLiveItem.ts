export interface IBacklinksBulkNewLostBacklinksLiveItem   {
        
        /** domain, subdomain or webpage from a POST array */
        target?: string | undefined
        
        /** number of new backlinks
number of new backlinks pointing to the target */
        new_backlinks?: number | undefined
        
        /** number of lost backlinks
number of lost backlinks of the target */
        lost_backlinks?: number | undefined

    [key: string]: any;

    }

export class BacklinksBulkNewLostBacklinksLiveItem  implements IBacklinksBulkNewLostBacklinksLiveItem {

    
    /** domain, subdomain or webpage from a POST array */

    target?: string | undefined;

    
    /** number of new backlinks
number of new backlinks pointing to the target */

    new_backlinks?: number | undefined;

    
    /** number of lost backlinks
number of lost backlinks of the target */

    lost_backlinks?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkNewLostBacklinksLiveItem) {

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
            this.new_backlinks = data["new_backlinks"];
            this.lost_backlinks = data["lost_backlinks"];
        }
    }

    static fromJS(data: any): BacklinksBulkNewLostBacklinksLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkNewLostBacklinksLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["new_backlinks"] = this.new_backlinks;
        data["lost_backlinks"] = this.lost_backlinks;
        return data;
    }
}