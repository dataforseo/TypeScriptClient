export interface IGoogleFinanceEarningsCalendarElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the news article */
        title?: string | undefined
        
        /** URL to the page of the market index on Google Finance */
        url?: string | undefined
        
        /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class GoogleFinanceEarningsCalendarElement  implements IGoogleFinanceEarningsCalendarElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the news article */

    title?: string | undefined;

    
    /** URL to the page of the market index on Google Finance */

    url?: string | undefined;

    
    /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceEarningsCalendarElement) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): GoogleFinanceEarningsCalendarElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceEarningsCalendarElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["timestamp"] = this.timestamp;
        return data;
    }
}