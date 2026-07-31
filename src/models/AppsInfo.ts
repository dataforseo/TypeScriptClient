export interface IAppsInfo   {
        
        /** *ID of the app* */
        app_id?: string | undefined
        
        /** *title of the app* */
        title?: string | undefined
        
        /** *URL to the app page on Google Play* */
        url?: string | undefined

    [key: string]: any;

    }

export class AppsInfo  implements IAppsInfo {

    
    /** *ID of the app* */

    app_id?: string | undefined;

    
    /** *title of the app* */

    title?: string | undefined;

    
    /** *URL to the app page on Google Play* */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppsInfo) {

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
            this.app_id = data["app_id"];
            this.title = data["title"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): AppsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_id"] = this.app_id;
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}