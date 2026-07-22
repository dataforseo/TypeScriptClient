export interface IAppDataAppleAppListingsCategoriesResultInfo   {
        
        /** name of the supported app category */
        category?: string | undefined
        
        /** number of app listings that make up the supported app category */
        count?: number | undefined

    [key: string]: any;

    }

export class AppDataAppleAppListingsCategoriesResultInfo  implements IAppDataAppleAppListingsCategoriesResultInfo {

    
    /** name of the supported app category */

    category?: string | undefined;

    
    /** number of app listings that make up the supported app category */

    count?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppListingsCategoriesResultInfo) {

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
            this.category = data["category"];
            this.count = data["count"];
        }
    }

    static fromJS(data: any): AppDataAppleAppListingsCategoriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppListingsCategoriesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["count"] = this.count;
        return data;
    }
}