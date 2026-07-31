export interface IBusinessDataUserProfileInfo   {
        
        name?: string | undefined
        
        url?: string | undefined
        
        image_url?: string | undefined
        
        location?: string | undefined
        
        /** *total number of reviews submitted by the reviewer* */
        reviews_count?: number | undefined

    [key: string]: any;

    }

export class BusinessDataUserProfileInfo  implements IBusinessDataUserProfileInfo {

    name?: string | undefined;

    url?: string | undefined;

    image_url?: string | undefined;

    location?: string | undefined;

    
    /** *total number of reviews submitted by the reviewer* */

    reviews_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataUserProfileInfo) {

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
            this.name = data["name"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.location = data["location"];
            this.reviews_count = data["reviews_count"];
        }
    }

    static fromJS(data: any): BusinessDataUserProfileInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataUserProfileInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["location"] = this.location;
        data["reviews_count"] = this.reviews_count;
        return data;
    }
}