import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IAppStoreSearchOrganic   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** id of the app */
        app_id?: string | undefined
        
        /** title of the app */
        title?: string | undefined
        
        /** URL to the app page on App Store */
        url?: string | undefined
        
        /** URL to the app icon */
        icon?: string | undefined
        
        /** the total number of reviews of the app */
        reviews_count?: number | undefined
        
        /** average rating of the app */
        rating?: RatingInfo | undefined
        
        /** indicates whether the app is free */
        is_free?: boolean | undefined
        
        /** price of the app */
        price?: PriceInfo | undefined

    [key: string]: any;

    }

export class AppStoreSearchOrganic  implements IAppStoreSearchOrganic {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** id of the app */

    app_id?: string | undefined;
    
    /** title of the app */

    title?: string | undefined;
    
    /** URL to the app page on App Store */

    url?: string | undefined;
    
    /** URL to the app icon */

    icon?: string | undefined;
    
    /** the total number of reviews of the app */

    reviews_count?: number | undefined;
    
    /** average rating of the app */

    rating?: RatingInfo | undefined;
    
    /** indicates whether the app is free */

    is_free?: boolean | undefined;
    
    /** price of the app */

    price?: PriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppStoreSearchOrganic) {

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
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.app_id = data["app_id"];
            this.title = data["title"];
            this.url = data["url"];
            this.icon = data["icon"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.is_free = data["is_free"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppStoreSearchOrganic {
        data = typeof data === 'object' ? data : {};


        let result = new AppStoreSearchOrganic();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["app_id"] = this.app_id;
        data["title"] = this.title;
        data["url"] = this.url;
        data["icon"] = this.icon;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["is_free"] = this.is_free;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        return data;
    }
}