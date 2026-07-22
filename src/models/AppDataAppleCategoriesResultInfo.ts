export interface IAppDataAppleCategoriesResultInfo   {
        
        /** contains full list of supported app categories */
        categories?: string[] | undefined

    [key: string]: any;

    }

export class AppDataAppleCategoriesResultInfo  implements IAppDataAppleCategoriesResultInfo {

    
    /** contains full list of supported app categories */

    categories?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleCategoriesResultInfo) {

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
            this.categories = data["categories"];
        }
    }

    static fromJS(data: any): AppDataAppleCategoriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleCategoriesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["categories"] = this.categories;
        return data;
    }
}