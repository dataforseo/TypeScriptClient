export interface IEventsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** URL */
        url?: string | undefined

    [key: string]: any;

    }

export class EventsElement  implements IEventsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** text alongside the link title */

    snippet?: string | undefined;
    
    /** URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IEventsElement) {

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
            this.snippet = data["snippet"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): EventsElement {
        data = typeof data === 'object' ? data : {};


        let result = new EventsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["url"] = this.url;
        return data;
    }
}