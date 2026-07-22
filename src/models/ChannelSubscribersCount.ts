export interface IChannelSubscribersCount   {
        
        /** displayed subscriber count
subscriber count as displayed on YouTube */
        displayed_count?: string | undefined
        
        /** subscriber count */
        count?: number | undefined

    [key: string]: any;

    }

export class ChannelSubscribersCount  implements IChannelSubscribersCount {

    
    /** displayed subscriber count
subscriber count as displayed on YouTube */

    displayed_count?: string | undefined;

    
    /** subscriber count */

    count?: number | undefined;

    [key: string]: any;


    constructor(data?: IChannelSubscribersCount) {

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
            this.displayed_count = data["displayed_count"];
            this.count = data["count"];
        }
    }

    static fromJS(data: any): ChannelSubscribersCount {
        data = typeof data === 'object' ? data : {};


        let result = new ChannelSubscribersCount();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["displayed_count"] = this.displayed_count;
        data["count"] = this.count;
        return data;
    }
}