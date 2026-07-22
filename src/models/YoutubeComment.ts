export interface IYoutubeComment   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** name of the author of the comment */
        author_name?: string | undefined
        
        /** the URL of the page where the author’s channel logo is hosted */
        author_thumbnail?: string | undefined
        
        /** URL of the author’s channel */
        author_url?: string | undefined
        
        /** text of the comment */
        text?: string | undefined
        
        /** displayed publication date */
        publication_date?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** number of likes on the comment */
        likes_count?: number | undefined
        
        /** number of replies on the comment */
        reply_count?: number | undefined

    [key: string]: any;

    }

export class YoutubeComment  implements IYoutubeComment {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** name of the author of the comment */

    author_name?: string | undefined;

    
    /** the URL of the page where the author’s channel logo is hosted */

    author_thumbnail?: string | undefined;

    
    /** URL of the author’s channel */

    author_url?: string | undefined;

    
    /** text of the comment */

    text?: string | undefined;

    
    /** displayed publication date */

    publication_date?: string | undefined;

    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    
    /** number of likes on the comment */

    likes_count?: number | undefined;

    
    /** number of replies on the comment */

    reply_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IYoutubeComment) {

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
            this.author_name = data["author_name"];
            this.author_thumbnail = data["author_thumbnail"];
            this.author_url = data["author_url"];
            this.text = data["text"];
            this.publication_date = data["publication_date"];
            this.timestamp = data["timestamp"];
            this.likes_count = data["likes_count"];
            this.reply_count = data["reply_count"];
        }
    }

    static fromJS(data: any): YoutubeComment {
        data = typeof data === 'object' ? data : {};


        let result = new YoutubeComment();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["author_name"] = this.author_name;
        data["author_thumbnail"] = this.author_thumbnail;
        data["author_url"] = this.author_url;
        data["text"] = this.text;
        data["publication_date"] = this.publication_date;
        data["timestamp"] = this.timestamp;
        data["likes_count"] = this.likes_count;
        data["reply_count"] = this.reply_count;
        return data;
    }
}