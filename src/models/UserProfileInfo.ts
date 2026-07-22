export interface IUserProfileInfo   {
        
        /** the name of the reviewer */
        name?: string | undefined
        
        /** URL to the profile picture of the reviewer */
        avatar?: string | undefined
        
        /** relevant url */
        url?: string | undefined
        
        /** total number of reviews submitted by the reviewer */
        reviews_count?: number | undefined
        
        /** country of the reviewer */
        locations?: string | undefined

    [key: string]: any;

    }

export class UserProfileInfo  implements IUserProfileInfo {

    
    /** the name of the reviewer */

    name?: string | undefined;

    
    /** URL to the profile picture of the reviewer */

    avatar?: string | undefined;

    
    /** relevant url */

    url?: string | undefined;

    
    /** total number of reviews submitted by the reviewer */

    reviews_count?: number | undefined;

    
    /** country of the reviewer */

    locations?: string | undefined;

    [key: string]: any;


    constructor(data?: IUserProfileInfo) {

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
            this.avatar = data["avatar"];
            this.url = data["url"];
            this.reviews_count = data["reviews_count"];
            this.locations = data["locations"];
        }
    }

    static fromJS(data: any): UserProfileInfo {
        data = typeof data === 'object' ? data : {};


        let result = new UserProfileInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["avatar"] = this.avatar;
        data["url"] = this.url;
        data["reviews_count"] = this.reviews_count;
        data["locations"] = this.locations;
        return data;
    }
}