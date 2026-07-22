export interface IAiModeAiOverviewReferenceInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** domain name of the reference */
        domain?: string | undefined
        
        /** link URL */
        url?: string | undefined
        
        /** link anchor text */
        title?: string | undefined
        
        /** text of the component */
        text?: string | undefined

    [key: string]: any;

    }

export class AiModeAiOverviewReferenceInfo  implements IAiModeAiOverviewReferenceInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;

    
    /** reference source name or title */

    source?: string | undefined;

    
    /** domain name of the reference */

    domain?: string | undefined;

    
    /** link URL */

    url?: string | undefined;

    
    /** link anchor text */

    title?: string | undefined;

    
    /** text of the component */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiModeAiOverviewReferenceInfo) {

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
            this.position = data["position"];
            this.source = data["source"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.title = data["title"];
            this.text = data["text"];
        }
    }

    static fromJS(data: any): AiModeAiOverviewReferenceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeAiOverviewReferenceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["source"] = this.source;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["title"] = this.title;
        data["text"] = this.text;
        return data;
    }
}