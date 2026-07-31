export interface INewerModel   {
        
        /** *product title* */
        title?: string | undefined
        
        /** *ASIN of the newer product model* */
        newer_model_asin?: string | undefined

    [key: string]: any;

    }

export class NewerModel  implements INewerModel {

    
    /** *product title* */

    title?: string | undefined;

    
    /** *ASIN of the newer product model* */

    newer_model_asin?: string | undefined;

    [key: string]: any;


    constructor(data?: INewerModel) {

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
            this.title = data["title"];
            this.newer_model_asin = data["newer_model_asin"];
        }
    }

    static fromJS(data: any): NewerModel {
        data = typeof data === 'object' ? data : {};


        let result = new NewerModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["newer_model_asin"] = this.newer_model_asin;
        return data;
    }
}