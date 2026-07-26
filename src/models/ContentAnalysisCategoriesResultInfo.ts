export interface IContentAnalysisCategoriesResultInfo   {
        
        /** category code */
        category_code?: number | undefined
        
        /** full name of the category */
        category_name?: string | undefined
        
        /** the code of the superordinate category example: 'category_code': 10178, 'category_name': 'Apparel Accessories', 'category_code_parent': 10021 where category_code_parent corresponds to: 'category_code': 10178, 'category_name': 'Apparel Accessories' */
        category_code_parent?: number | undefined

    [key: string]: any;

    }

export class ContentAnalysisCategoriesResultInfo  implements IContentAnalysisCategoriesResultInfo {

    
    /** category code */

    category_code?: number | undefined;

    
    /** full name of the category */

    category_name?: string | undefined;

    
    /** the code of the superordinate category example: 'category_code': 10178, 'category_name': 'Apparel Accessories', 'category_code_parent': 10021 where category_code_parent corresponds to: 'category_code': 10178, 'category_name': 'Apparel Accessories' */

    category_code_parent?: number | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisCategoriesResultInfo) {

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
            this.category_code = data["category_code"];
            this.category_name = data["category_name"];
            this.category_code_parent = data["category_code_parent"];
        }
    }

    static fromJS(data: any): ContentAnalysisCategoriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisCategoriesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category_code"] = this.category_code;
        data["category_name"] = this.category_name;
        data["category_code_parent"] = this.category_code_parent;
        return data;
    }
}