export interface IDomainAnalyticsTechnologiesAggregationTechnologiesLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** technology group id */
        group?: string | undefined
        
        /** technology category id */
        category?: string | undefined
        
        /** technology name */
        technology?: string | undefined
        
        /** technology groups count
number of domains that match the parameters you specified and are using technologies from the indicated group */
        groups_count?: number | undefined
        
        /** technology categories count
number of domains that match the parameters you specified and are using technologies from the indicated category */
        categories_count?: number | undefined
        
        /** technologies count
number of domains that match the parameters you specified and are using the indicated technology */
        technologies_count?: number | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem  implements IDomainAnalyticsTechnologiesAggregationTechnologiesLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** technology group id */

    group?: string | undefined;

    
    /** technology category id */

    category?: string | undefined;

    
    /** technology name */

    technology?: string | undefined;

    
    /** technology groups count
number of domains that match the parameters you specified and are using technologies from the indicated group */

    groups_count?: number | undefined;

    
    /** technology categories count
number of domains that match the parameters you specified and are using technologies from the indicated category */

    categories_count?: number | undefined;

    
    /** technologies count
number of domains that match the parameters you specified and are using the indicated technology */

    technologies_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesAggregationTechnologiesLiveItem) {

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
            this.group = data["group"];
            this.category = data["category"];
            this.technology = data["technology"];
            this.groups_count = data["groups_count"];
            this.categories_count = data["categories_count"];
            this.technologies_count = data["technologies_count"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["group"] = this.group;
        data["category"] = this.category;
        data["technology"] = this.technology;
        data["groups_count"] = this.groups_count;
        data["categories_count"] = this.categories_count;
        data["technologies_count"] = this.technologies_count;
        return data;
    }
}