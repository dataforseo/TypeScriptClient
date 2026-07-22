export interface IBacklinksBulkSpamScoreLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** domain, subdomain or webpage from a POST array */
        target?: string | undefined
        
        /** average spam score the target
learn more about how the metric is calculated */
        spam_score?: number | undefined

    [key: string]: any;

    }

export class BacklinksBulkSpamScoreLiveItem  implements IBacklinksBulkSpamScoreLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** domain, subdomain or webpage from a POST array */

    target?: string | undefined;

    
    /** average spam score the target
learn more about how the metric is calculated */

    spam_score?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkSpamScoreLiveItem) {

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
            this.target = data["target"];
            this.spam_score = data["spam_score"];
        }
    }

    static fromJS(data: any): BacklinksBulkSpamScoreLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkSpamScoreLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["target"] = this.target;
        data["spam_score"] = this.spam_score;
        return data;
    }
}