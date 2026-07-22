import { LinkElement, ILinkElement } from "./LinkElement";


export interface IGoogleBusinessPost   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank among all the listed updates
absolute position among all present elements */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values: right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** author of the post */
        author?: string | undefined
        
        /** additional content of a post */
        snippet?: string | undefined
        
        /** main content of a post */
        post_text?: string | undefined
        
        /** url of a post */
        url?: string | undefined
        
        /** url of an image included in the post */
        images_url?: string | undefined
        
        /** date when a post was published
in the following format:
'mm/dd/yyyy hh:mm:ss' */
        post_date?: string | undefined
        
        /** time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** links included in the post */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class GoogleBusinessPost  implements IGoogleBusinessPost {

    
    /** type of element */

    type?: string | undefined;

    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank among all the listed updates
absolute position among all present elements */

    rank_absolute?: number | undefined;

    
    /** the alignment of the element in SERP
can take the following values: right */

    position?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    
    /** author of the post */

    author?: string | undefined;

    
    /** additional content of a post */

    snippet?: string | undefined;

    
    /** main content of a post */

    post_text?: string | undefined;

    
    /** url of a post */

    url?: string | undefined;

    
    /** url of an image included in the post */

    images_url?: string | undefined;

    
    /** date when a post was published
in the following format:
'mm/dd/yyyy hh:mm:ss' */

    post_date?: string | undefined;

    
    /** time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    
    /** links included in the post */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleBusinessPost) {

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
            this.xpath = data["xpath"];
            this.author = data["author"];
            this.snippet = data["snippet"];
            this.post_text = data["post_text"];
            this.url = data["url"];
            this.images_url = data["images_url"];
            this.post_date = data["post_date"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleBusinessPost {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleBusinessPost();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["author"] = this.author;
        data["snippet"] = this.snippet;
        data["post_text"] = this.post_text;
        data["url"] = this.url;
        data["images_url"] = this.images_url;
        data["post_date"] = this.post_date;
        data["timestamp"] = this.timestamp;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}