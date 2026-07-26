export interface IBacklinksBulkBacklinksLiveItem   {
        
        /** *domain, subdomain or webpage from a POST array* */
        target?: string | undefined
        
        /** *number of backlinks pointing to the `target`* */
        backlinks?: number | undefined

    [key: string]: any;

    }

export class BacklinksBulkBacklinksLiveItem  implements IBacklinksBulkBacklinksLiveItem {

    
    /** *domain, subdomain or webpage from a POST array* */

    target?: string | undefined;

    
    /** *number of backlinks pointing to the `target`* */

    backlinks?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkBacklinksLiveItem) {

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
            this.backlinks = data["backlinks"];
        }
    }

    static fromJS(data: any): BacklinksBulkBacklinksLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkBacklinksLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["backlinks"] = this.backlinks;
        return data;
    }
}