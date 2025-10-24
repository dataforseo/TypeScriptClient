import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { AppsInfo, IAppsInfo } from "./AppsInfo";


export interface IGooglePlayInfoOrganic   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank among all the listed apps
absolute position among all apps on the list */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values: left */
        position?: string | undefined
        
        /** ID of the app */
        app_id?: string | undefined
        
        /** title of the app */
        title?: string | undefined
        
        /** URL to the app page on Google Play */
        url?: string | undefined
        
        /** URL to the app icon */
        icon?: string | undefined
        
        /** description of the app */
        description?: string | undefined
        
        /** the total number of reviews the app has */
        reviews_count?: number | undefined
        
        /** average rating of the app */
        rating?: RatingInfo | undefined
        
        /** price of the app */
        price?: PriceInfo | undefined
        
        /** indicates whether the app is free */
        is_free?: boolean | undefined
        
        /** main category of the app */
        main_category?: string | undefined
        
        /** number of installs of the app
approximate number of installs as displayed on the app page */
        installs?: string | undefined
        
        /** number of installs of the app
the exact number of installs of the app */
        installs_count?: number | undefined
        
        /** name of the app developer */
        developer?: string | undefined
        
        /** ID of the app developer */
        developer_id?: string | undefined
        
        /** URL to the developer page on Google Play */
        developer_url?: string | undefined
        
        /** email address of the developer */
        developer_email?: string | undefined
        
        /** physical address of the developer */
        developer_address?: string | undefined
        
        /** official website of the developer */
        developer_website?: string | undefined
        
        /** current version of the app */
        version?: string | undefined
        
        /** minimum OS version required to install the app */
        minimum_os_version?: string | undefined
        
        /** size of the app */
        size?: string | undefined
        
        /** date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        released_date?: string | undefined
        
        /** date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        last_update_date?: string | undefined
        
        /** update notes
contains the latest update notes from the developer */
        update_notes?: string | undefined
        
        /** app images
contains URLs to the images published on the app page on Google Play */
        images?: string[] | undefined
        
        /** app videos
contains URLs to the video published on the app page on Google Play */
        videos?: string[] | undefined
        
        /** similar apps
displays apps similar to the app in a POST request */
        similar_apps?: AppsInfo[] | undefined
        
        /** similar apps
information about apps built by the same developer */
        more_apps_by_developer?: AppsInfo[] | undefined
        
        /** app genres
contains relevant app categories */
        genres?: string[] | undefined
        
        /** app tags
contains relevant app tags */
        tags?: string[] | undefined

    [key: string]: any;

    }

export class GooglePlayInfoOrganic  implements IGooglePlayInfoOrganic {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank among all the listed apps
absolute position among all apps on the list */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values: left */

    position?: string | undefined;
    
    /** ID of the app */

    app_id?: string | undefined;
    
    /** title of the app */

    title?: string | undefined;
    
    /** URL to the app page on Google Play */

    url?: string | undefined;
    
    /** URL to the app icon */

    icon?: string | undefined;
    
    /** description of the app */

    description?: string | undefined;
    
    /** the total number of reviews the app has */

    reviews_count?: number | undefined;
    
    /** average rating of the app */

    rating?: RatingInfo | undefined;
    
    /** price of the app */

    price?: PriceInfo | undefined;
    
    /** indicates whether the app is free */

    is_free?: boolean | undefined;
    
    /** main category of the app */

    main_category?: string | undefined;
    
    /** number of installs of the app
approximate number of installs as displayed on the app page */

    installs?: string | undefined;
    
    /** number of installs of the app
the exact number of installs of the app */

    installs_count?: number | undefined;
    
    /** name of the app developer */

    developer?: string | undefined;
    
    /** ID of the app developer */

    developer_id?: string | undefined;
    
    /** URL to the developer page on Google Play */

    developer_url?: string | undefined;
    
    /** email address of the developer */

    developer_email?: string | undefined;
    
    /** physical address of the developer */

    developer_address?: string | undefined;
    
    /** official website of the developer */

    developer_website?: string | undefined;
    
    /** current version of the app */

    version?: string | undefined;
    
    /** minimum OS version required to install the app */

    minimum_os_version?: string | undefined;
    
    /** size of the app */

    size?: string | undefined;
    
    /** date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    released_date?: string | undefined;
    
    /** date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    last_update_date?: string | undefined;
    
    /** update notes
contains the latest update notes from the developer */

    update_notes?: string | undefined;
    
    /** app images
contains URLs to the images published on the app page on Google Play */

    images?: string[] | undefined;
    
    /** app videos
contains URLs to the video published on the app page on Google Play */

    videos?: string[] | undefined;
    
    /** similar apps
displays apps similar to the app in a POST request */

    similar_apps?: AppsInfo[] | undefined;
    
    /** similar apps
information about apps built by the same developer */

    more_apps_by_developer?: AppsInfo[] | undefined;
    
    /** app genres
contains relevant app categories */

    genres?: string[] | undefined;
    
    /** app tags
contains relevant app tags */

    tags?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IGooglePlayInfoOrganic) {

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
            this.description = data["description"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.is_free = data["is_free"];
            this.main_category = data["main_category"];
            this.installs = data["installs"];
            this.installs_count = data["installs_count"];
            this.developer = data["developer"];
            this.developer_id = data["developer_id"];
            this.developer_url = data["developer_url"];
            this.developer_email = data["developer_email"];
            this.developer_address = data["developer_address"];
            this.developer_website = data["developer_website"];
            this.version = data["version"];
            this.minimum_os_version = data["minimum_os_version"];
            this.size = data["size"];
            this.released_date = data["released_date"];
            this.last_update_date = data["last_update_date"];
            this.update_notes = data["update_notes"];
            this.images = data["images"];
            this.videos = data["videos"];
            if (Array.isArray(data["similar_apps"])) {
                this.similar_apps = [];
                for (let item of data["similar_apps"]) {
                    this.similar_apps.push(AppsInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["more_apps_by_developer"])) {
                this.more_apps_by_developer = [];
                for (let item of data["more_apps_by_developer"]) {
                    this.more_apps_by_developer.push(AppsInfo.fromJS(item));
                }
            }
            this.genres = data["genres"];
            this.tags = data["tags"];
        }
    }

    static fromJS(data: any): GooglePlayInfoOrganic {
        data = typeof data === 'object' ? data : {};


        let result = new GooglePlayInfoOrganic();
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
        data["description"] = this.description;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["is_free"] = this.is_free;
        data["main_category"] = this.main_category;
        data["installs"] = this.installs;
        data["installs_count"] = this.installs_count;
        data["developer"] = this.developer;
        data["developer_id"] = this.developer_id;
        data["developer_url"] = this.developer_url;
        data["developer_email"] = this.developer_email;
        data["developer_address"] = this.developer_address;
        data["developer_website"] = this.developer_website;
        data["version"] = this.version;
        data["minimum_os_version"] = this.minimum_os_version;
        data["size"] = this.size;
        data["released_date"] = this.released_date;
        data["last_update_date"] = this.last_update_date;
        data["update_notes"] = this.update_notes;
        data["images"] = this.images;
        data["videos"] = this.videos;
        data["similar_apps"] = null;
        if (Array.isArray(this.similar_apps)) {
            data["similar_apps"] = [];
            for (let item of this.similar_apps) {
                if (item && typeof item.toJSON === "function") {
                    data["similar_apps"].push(item?.toJSON());
                }
            }
        }
        data["more_apps_by_developer"] = null;
        if (Array.isArray(this.more_apps_by_developer)) {
            data["more_apps_by_developer"] = [];
            for (let item of this.more_apps_by_developer) {
                if (item && typeof item.toJSON === "function") {
                    data["more_apps_by_developer"].push(item?.toJSON());
                }
            }
        }
        data["genres"] = this.genres;
        data["tags"] = this.tags;
        return data;
    }
}