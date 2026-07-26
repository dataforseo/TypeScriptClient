export interface IGraphItems   {
        
        /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** point value on graph */
        value?: number | undefined
        
        /** volume value on graph */
        volume?: number | undefined

    [key: string]: any;

    }

export class GraphItems  implements IGraphItems {

    
    /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;

    
    /** point value on graph */

    value?: number | undefined;

    
    /** volume value on graph */

    volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IGraphItems) {

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
            this.timestamp = data["timestamp"];
            this.value = data["value"];
            this.volume = data["volume"];
        }
    }

    static fromJS(data: any): GraphItems {
        data = typeof data === 'object' ? data : {};


        let result = new GraphItems();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["timestamp"] = this.timestamp;
        data["value"] = this.value;
        data["volume"] = this.volume;
        return data;
    }
}