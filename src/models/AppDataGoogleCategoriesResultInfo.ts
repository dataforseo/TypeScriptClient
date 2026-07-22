export interface IAppDataGoogleCategoriesResultInfo   {
        
        /** contains full list of supported app categories */
        categories?: string[] | undefined

    [key: string]: any;

    }

export class AppDataGoogleCategoriesResultInfo  implements IAppDataGoogleCategoriesResultInfo {

    
    /** contains full list of supported app categories */

    categories?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataGoogleCategoriesResultInfo) {

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

    static fromJS(data: any): AppDataGoogleCategoriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGoogleCategoriesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["categories"] = this.categories;
        return data;
    }
}