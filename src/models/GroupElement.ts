export interface IGroupElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** grouping identifier
the specific identifier for the grouping dimension */
        key?: string | undefined
        
        /** total LLM mentions count
the number of times the target keyword or domain were mentioned in relation to this specific grouping key */
        mentions?: number | undefined
        
        /** current AI search volume rate of a keyword
learn more about this metric here */
        ai_search_volume?: number | undefined
        
        /** current AI impressions rate of a keyword */
        impressions?: number | undefined

    [key: string]: any;

    }

export class GroupElement  implements IGroupElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** grouping identifier
the specific identifier for the grouping dimension */

    key?: string | undefined;
    
    /** total LLM mentions count
the number of times the target keyword or domain were mentioned in relation to this specific grouping key */

    mentions?: number | undefined;
    
    /** current AI search volume rate of a keyword
learn more about this metric here */

    ai_search_volume?: number | undefined;
    
    /** current AI impressions rate of a keyword */

    impressions?: number | undefined;

    [key: string]: any;


    constructor(data?: IGroupElement) {

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
            this.key = data["key"];
            this.mentions = data["mentions"];
            this.ai_search_volume = data["ai_search_volume"];
            this.impressions = data["impressions"];
        }
    }

    static fromJS(data: any): GroupElement {
        data = typeof data === 'object' ? data : {};


        let result = new GroupElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["key"] = this.key;
        data["mentions"] = this.mentions;
        data["ai_search_volume"] = this.ai_search_volume;
        data["impressions"] = this.impressions;
        return data;
    }
}