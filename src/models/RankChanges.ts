export interface IRankChanges   {
        
        /** *previous absolute rank in SERP*             indicates previous rank of the element in Google SERP;             if this element is new, the value will be `null` */
        previous_rank_absolute?: number | undefined
        
        /** *number of new ranked elements*             indicates how many new ranked elements were found for this domain or webpage */
        is_new?: boolean | undefined
        
        /** *rank went up*             indicates how many ranked elements of this target went up in Google Search */
        is_up?: boolean | undefined
        
        /** *rank went down*             indicates how many ranked elements of this target went down in Google Search */
        is_down?: boolean | undefined

    [key: string]: any;

    }

export class RankChanges  implements IRankChanges {

    
    /** *previous absolute rank in SERP*             indicates previous rank of the element in Google SERP;             if this element is new, the value will be `null` */

    previous_rank_absolute?: number | undefined;

    
    /** *number of new ranked elements*             indicates how many new ranked elements were found for this domain or webpage */

    is_new?: boolean | undefined;

    
    /** *rank went up*             indicates how many ranked elements of this target went up in Google Search */

    is_up?: boolean | undefined;

    
    /** *rank went down*             indicates how many ranked elements of this target went down in Google Search */

    is_down?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IRankChanges) {

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
            this.previous_rank_absolute = data["previous_rank_absolute"];
            this.is_new = data["is_new"];
            this.is_up = data["is_up"];
            this.is_down = data["is_down"];
        }
    }

    static fromJS(data: any): RankChanges {
        data = typeof data === 'object' ? data : {};


        let result = new RankChanges();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["previous_rank_absolute"] = this.previous_rank_absolute;
        data["is_new"] = this.is_new;
        data["is_up"] = this.is_up;
        data["is_down"] = this.is_down;
        return data;
    }
}