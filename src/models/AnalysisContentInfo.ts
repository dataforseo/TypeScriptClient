import { SocialMetricsInfo, ISocialMetricsInfo } from "./SocialMetricsInfo";
import { ContentRatingInfo, IContentRatingInfo } from "./ContentRatingInfo";


export interface IAnalysisContentInfo   {
        
        /** type of content example: page_content, comment */
        content_type?: string | undefined
        
        /** title of the result */
        title?: string | undefined
        
        /** page title */
        main_title?: string | undefined
        
        /** title of the previous content block */
        previous_title?: string | undefined
        
        /** title heading level indicates h-tag level from 1 (top) to 6 (bottom) */
        level?: number | undefined
        
        /** author of the content */
        author?: string | undefined
        
        /** content snippet */
        snippet?: string | undefined
        
        /** character length of the snippet */
        snippet_length?: number | undefined
        
        /** social media engagement metrics data on social media interactions associated with the content based on website embeds developed and supported by social media platforms */
        social_metrics?: SocialMetricsInfo[] | undefined
        
        /** highlighted text from the snippet */
        highlighted_text?: string | undefined
        
        /** main language of the domain to obtain a full list of available languages, refer to the Languages endpoint */
        language?: string | undefined
        
        /** sentiment connotations contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment possible sentiment connotations: anger, happiness, love, sadness, share, fun */
        sentiment_connotations?: { [key: string]: number; } | undefined
        
        /** connotation types contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type possible sentiment connotation types: positive, negative, neutral */
        connotation_types?: { [key: string]: number; } | undefined
        
        /** text category to obtain a full list of available categories, refer to the Categories endpoint */
        text_category?: number[] | undefined
        
        /** date and time when the content was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */
        date_published?: string | undefined
        
        /** content quality score this value is calculated based on the number of words, sentences and characters the content contains */
        content_quality_score?: number | undefined
        
        /** semantic location indicates semantic element in HTML where the target keyword citation is located example: article, header */
        semantic_location?: string | undefined
        
        /** content rating rating related to content_info */
        rating?: ContentRatingInfo | undefined
        
        /** citation group date and time indicates content publication date or date and time when our crawler visited the page for the first time; this field can be used to group citations by date and display citation trends; date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */
        group_date?: string | undefined

    [key: string]: any;

    }

export class AnalysisContentInfo  implements IAnalysisContentInfo {

    
    /** type of content example: page_content, comment */

    content_type?: string | undefined;

    
    /** title of the result */

    title?: string | undefined;

    
    /** page title */

    main_title?: string | undefined;

    
    /** title of the previous content block */

    previous_title?: string | undefined;

    
    /** title heading level indicates h-tag level from 1 (top) to 6 (bottom) */

    level?: number | undefined;

    
    /** author of the content */

    author?: string | undefined;

    
    /** content snippet */

    snippet?: string | undefined;

    
    /** character length of the snippet */

    snippet_length?: number | undefined;

    
    /** social media engagement metrics data on social media interactions associated with the content based on website embeds developed and supported by social media platforms */

    social_metrics?: SocialMetricsInfo[] | undefined;

    
    /** highlighted text from the snippet */

    highlighted_text?: string | undefined;

    
    /** main language of the domain to obtain a full list of available languages, refer to the Languages endpoint */

    language?: string | undefined;

    
    /** sentiment connotations contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment possible sentiment connotations: anger, happiness, love, sadness, share, fun */

    sentiment_connotations?: { [key: string]: number; } | undefined;

    
    /** connotation types contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type possible sentiment connotation types: positive, negative, neutral */

    connotation_types?: { [key: string]: number; } | undefined;

    
    /** text category to obtain a full list of available categories, refer to the Categories endpoint */

    text_category?: number[] | undefined;

    
    /** date and time when the content was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */

    date_published?: string | undefined;

    
    /** content quality score this value is calculated based on the number of words, sentences and characters the content contains */

    content_quality_score?: number | undefined;

    
    /** semantic location indicates semantic element in HTML where the target keyword citation is located example: article, header */

    semantic_location?: string | undefined;

    
    /** content rating rating related to content_info */

    rating?: ContentRatingInfo | undefined;

    
    /** citation group date and time indicates content publication date or date and time when our crawler visited the page for the first time; this field can be used to group citations by date and display citation trends; date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */

    group_date?: string | undefined;

    [key: string]: any;


    constructor(data?: IAnalysisContentInfo) {

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
            this.content_type = data["content_type"];
            this.title = data["title"];
            this.main_title = data["main_title"];
            this.previous_title = data["previous_title"];
            this.level = data["level"];
            this.author = data["author"];
            this.snippet = data["snippet"];
            this.snippet_length = data["snippet_length"];
            if (Array.isArray(data["social_metrics"])) {
                this.social_metrics = [];
                for (let item of data["social_metrics"]) {
                    this.social_metrics.push(SocialMetricsInfo.fromJS(item));
                }
            }
            this.highlighted_text = data["highlighted_text"];
            this.language = data["language"];
            this.sentiment_connotations = data["sentiment_connotations"];
            this.connotation_types = data["connotation_types"];
            this.text_category = data["text_category"];
            this.date_published = data["date_published"];
            this.content_quality_score = data["content_quality_score"];
            this.semantic_location = data["semantic_location"];
            this.rating = data["rating"] ? ContentRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.group_date = data["group_date"];
        }
    }

    static fromJS(data: any): AnalysisContentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AnalysisContentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["content_type"] = this.content_type;
        data["title"] = this.title;
        data["main_title"] = this.main_title;
        data["previous_title"] = this.previous_title;
        data["level"] = this.level;
        data["author"] = this.author;
        data["snippet"] = this.snippet;
        data["snippet_length"] = this.snippet_length;
        data["social_metrics"] = null;
        if (Array.isArray(this.social_metrics)) {
            data["social_metrics"] = [];
            for (let item of this.social_metrics) {
                if (item && typeof item.toJSON === "function") {
                    data["social_metrics"].push(item?.toJSON());
                }
            }
        }
        data["highlighted_text"] = this.highlighted_text;
        data["language"] = this.language;
        data["sentiment_connotations"] = this.sentiment_connotations;
        data["connotation_types"] = this.connotation_types;
        data["text_category"] = this.text_category;
        data["date_published"] = this.date_published;
        data["content_quality_score"] = this.content_quality_score;
        data["semantic_location"] = this.semantic_location;
        data["rating"] = this.rating ? ContentRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["group_date"] = this.group_date;
        return data;
    }
}