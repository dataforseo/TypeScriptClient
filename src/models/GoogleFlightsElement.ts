export interface IGoogleFlightsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** URL */
        url?: string | undefined

    [key: string]: any;

    }

export class GoogleFlightsElement  implements IGoogleFlightsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFlightsElement) {

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
            this.description = data["description"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): GoogleFlightsElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFlightsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["description"] = this.description;
        data["url"] = this.url;
        return data;
    }
}