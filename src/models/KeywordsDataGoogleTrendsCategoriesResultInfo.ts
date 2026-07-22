export interface IKeywordsDataGoogleTrendsCategoriesResultInfo   {
        
        /** unique google trends category identifier */
        category_code?: number | undefined
        
        /** name of the google trends category */
        category_name?: string | undefined
        
        /** the code of the superordinate category
example:
'category_code': 1100,
'category_name': 'Superhero Films',
'category_code_parent': 1097
where category_code_parent corresponds to:
'category_code': 1097,
'category_name': 'Action & Adventure Films' */
        category_code_parent?: number | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsCategoriesResultInfo  implements IKeywordsDataGoogleTrendsCategoriesResultInfo {

    
    /** unique google trends category identifier */

    category_code?: number | undefined;

    
    /** name of the google trends category */

    category_name?: string | undefined;

    
    /** the code of the superordinate category
example:
'category_code': 1100,
'category_name': 'Superhero Films',
'category_code_parent': 1097
where category_code_parent corresponds to:
'category_code': 1097,
'category_name': 'Action & Adventure Films' */

    category_code_parent?: number | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsCategoriesResultInfo) {

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

    static fromJS(data: any): KeywordsDataGoogleTrendsCategoriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsCategoriesResultInfo();
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