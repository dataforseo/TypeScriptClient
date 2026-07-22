export interface IBacklinksBulkRanksLiveItem   {
        
        /** domain, subdomain or webpage from a POST array */
        target?: string | undefined
        
        /** rank of the target
values represent real-time data for the date of the request
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        rank?: number | undefined

    [key: string]: any;

    }

export class BacklinksBulkRanksLiveItem  implements IBacklinksBulkRanksLiveItem {

    
    /** domain, subdomain or webpage from a POST array */

    target?: string | undefined;

    
    /** rank of the target
values represent real-time data for the date of the request
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    rank?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkRanksLiveItem) {

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
            this.rank = data["rank"];
        }
    }

    static fromJS(data: any): BacklinksBulkRanksLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkRanksLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["rank"] = this.rank;
        return data;
    }
}