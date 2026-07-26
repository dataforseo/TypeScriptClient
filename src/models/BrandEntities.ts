export interface IBrandEntities   {
        
        /** *rank in the results* */
        rank?: number | undefined
        
        /** *source title* */
        title?: string | undefined
        
        /** *category of the brand* */
        category?: string | undefined

    [key: string]: any;

    }

export class BrandEntities  implements IBrandEntities {

    
    /** *rank in the results* */

    rank?: number | undefined;

    
    /** *source title* */

    title?: string | undefined;

    
    /** *category of the brand* */

    category?: string | undefined;

    [key: string]: any;


    constructor(data?: IBrandEntities) {

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
            this.rank = data["rank"];
            this.title = data["title"];
            this.category = data["category"];
        }
    }

    static fromJS(data: any): BrandEntities {
        data = typeof data === 'object' ? data : {};


        let result = new BrandEntities();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["rank"] = this.rank;
        data["title"] = this.title;
        data["category"] = this.category;
        return data;
    }
}