export interface IAppUserProfileInfo   {
        
        /** profile name of the reviewer */
        profile_name?: string | undefined
        
        /** URL to the reviewer’s profile image */
        profile_image_url?: string | undefined

    [key: string]: any;

    }

export class AppUserProfileInfo  implements IAppUserProfileInfo {

    
    /** profile name of the reviewer */

    profile_name?: string | undefined;

    
    /** URL to the reviewer’s profile image */

    profile_image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppUserProfileInfo) {

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
            this.profile_name = data["profile_name"];
            this.profile_image_url = data["profile_image_url"];
        }
    }

    static fromJS(data: any): AppUserProfileInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppUserProfileInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["profile_name"] = this.profile_name;
        data["profile_image_url"] = this.profile_image_url;
        return data;
    }
}