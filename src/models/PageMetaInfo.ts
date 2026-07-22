import { HtmlContentInfo, IHtmlContentInfo } from "./HtmlContentInfo";
import { HunspellInfo, IHunspellInfo } from "./HunspellInfo";
import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";


export interface IPageMetaInfo   {
        
        /** page title */
        title?: string | undefined
        
        /** code page
example: 65001 */
        charset?: number | undefined
        
        /** indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page */
        follow?: boolean | undefined
        
        /** meta tag generator */
        generator?: string | undefined
        
        /** HTML header tags */
        htags?: { [key: string]: string[]; } | undefined
        
        /** content of the meta description tag */
        description?: string | undefined
        
        /** favicon of the page */
        favicon?: string | undefined
        
        /** content of the keywords meta tag */
        meta_keywords?: string | undefined
        
        /** canonical page */
        canonical?: string | undefined
        
        /** number of internal links on the page */
        internal_links_count?: number | undefined
        
        /** number of external links on the page */
        external_links_count?: number | undefined
        
        /** number of internal links pointing at the page */
        inbound_links_count?: number | undefined
        
        /** number of images on the page */
        images_count?: number | undefined
        
        /** total size of images on the page measured in bytes */
        images_size?: number | undefined
        
        /** number of scripts on the page */
        scripts_count?: number | undefined
        
        /** total size of scripts on the page measured in bytes */
        scripts_size?: number | undefined
        
        /** number of stylesheets on the page */
        stylesheets_count?: number | undefined
        
        /** total size of stylesheets on the page measured in bytes */
        stylesheets_size?: number | undefined
        
        /** length of the title tag in characters */
        title_length?: number | undefined
        
        /** length of the description tag in characters */
        description_length?: number | undefined
        
        /** number of scripts on the page that block page rendering */
        render_blocking_scripts_count?: number | undefined
        
        /** number of CSS styles on the page that block page rendering */
        render_blocking_stylesheets_count?: number | undefined
        
        /** Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more. */
        cumulative_layout_shift?: number | undefined
        
        /** meta title of the page
meta tag in the head section of an HTML document that defines the title of a page */
        meta_title?: string | undefined
        
        /** overall information about content of the page */
        content?: HtmlContentInfo | undefined
        
        /** deprecated tags on the page */
        deprecated_tags?: string[] | undefined
        
        /** duplicate meta tags on the page */
        duplicate_meta_tags?: string[] | undefined
        
        /** spellcheck
hunspell spellcheck errors */
        spell?: HunspellInfo | undefined
        
        /** object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card */
        social_media_tags?: { [key: string]: string; } | undefined
        
        /** resource errors and warnings */
        broken_html?: OnPageResourceIssueInfo | undefined

    [key: string]: any;

    }

export class PageMetaInfo  implements IPageMetaInfo {

    
    /** page title */

    title?: string | undefined;

    
    /** code page
example: 65001 */

    charset?: number | undefined;

    
    /** indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page */

    follow?: boolean | undefined;

    
    /** meta tag generator */

    generator?: string | undefined;

    
    /** HTML header tags */

    htags?: { [key: string]: string[]; } | undefined;

    
    /** content of the meta description tag */

    description?: string | undefined;

    
    /** favicon of the page */

    favicon?: string | undefined;

    
    /** content of the keywords meta tag */

    meta_keywords?: string | undefined;

    
    /** canonical page */

    canonical?: string | undefined;

    
    /** number of internal links on the page */

    internal_links_count?: number | undefined;

    
    /** number of external links on the page */

    external_links_count?: number | undefined;

    
    /** number of internal links pointing at the page */

    inbound_links_count?: number | undefined;

    
    /** number of images on the page */

    images_count?: number | undefined;

    
    /** total size of images on the page measured in bytes */

    images_size?: number | undefined;

    
    /** number of scripts on the page */

    scripts_count?: number | undefined;

    
    /** total size of scripts on the page measured in bytes */

    scripts_size?: number | undefined;

    
    /** number of stylesheets on the page */

    stylesheets_count?: number | undefined;

    
    /** total size of stylesheets on the page measured in bytes */

    stylesheets_size?: number | undefined;

    
    /** length of the title tag in characters */

    title_length?: number | undefined;

    
    /** length of the description tag in characters */

    description_length?: number | undefined;

    
    /** number of scripts on the page that block page rendering */

    render_blocking_scripts_count?: number | undefined;

    
    /** number of CSS styles on the page that block page rendering */

    render_blocking_stylesheets_count?: number | undefined;

    
    /** Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more. */

    cumulative_layout_shift?: number | undefined;

    
    /** meta title of the page
meta tag in the head section of an HTML document that defines the title of a page */

    meta_title?: string | undefined;

    
    /** overall information about content of the page */

    content?: HtmlContentInfo | undefined;

    
    /** deprecated tags on the page */

    deprecated_tags?: string[] | undefined;

    
    /** duplicate meta tags on the page */

    duplicate_meta_tags?: string[] | undefined;

    
    /** spellcheck
hunspell spellcheck errors */

    spell?: HunspellInfo | undefined;

    
    /** object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card */

    social_media_tags?: { [key: string]: string; } | undefined;

    
    /** resource errors and warnings */

    broken_html?: OnPageResourceIssueInfo | undefined;

    [key: string]: any;


    constructor(data?: IPageMetaInfo) {

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
            this.title = data["title"];
            this.charset = data["charset"];
            this.follow = data["follow"];
            this.generator = data["generator"];
            this.htags = data["htags"];
            this.description = data["description"];
            this.favicon = data["favicon"];
            this.meta_keywords = data["meta_keywords"];
            this.canonical = data["canonical"];
            this.internal_links_count = data["internal_links_count"];
            this.external_links_count = data["external_links_count"];
            this.inbound_links_count = data["inbound_links_count"];
            this.images_count = data["images_count"];
            this.images_size = data["images_size"];
            this.scripts_count = data["scripts_count"];
            this.scripts_size = data["scripts_size"];
            this.stylesheets_count = data["stylesheets_count"];
            this.stylesheets_size = data["stylesheets_size"];
            this.title_length = data["title_length"];
            this.description_length = data["description_length"];
            this.render_blocking_scripts_count = data["render_blocking_scripts_count"];
            this.render_blocking_stylesheets_count = data["render_blocking_stylesheets_count"];
            this.cumulative_layout_shift = data["cumulative_layout_shift"];
            this.meta_title = data["meta_title"];
            this.content = data["content"] ? HtmlContentInfo.fromJS(data["content"]) : <any>undefined;
            this.deprecated_tags = data["deprecated_tags"];
            this.duplicate_meta_tags = data["duplicate_meta_tags"];
            this.spell = data["spell"] ? HunspellInfo.fromJS(data["spell"]) : <any>undefined;
            this.social_media_tags = data["social_media_tags"];
            this.broken_html = data["broken_html"] ? OnPageResourceIssueInfo.fromJS(data["broken_html"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PageMetaInfo {
        data = typeof data === 'object' ? data : {};


        let result = new PageMetaInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["charset"] = this.charset;
        data["follow"] = this.follow;
        data["generator"] = this.generator;
        data["htags"] = this.htags;
        data["description"] = this.description;
        data["favicon"] = this.favicon;
        data["meta_keywords"] = this.meta_keywords;
        data["canonical"] = this.canonical;
        data["internal_links_count"] = this.internal_links_count;
        data["external_links_count"] = this.external_links_count;
        data["inbound_links_count"] = this.inbound_links_count;
        data["images_count"] = this.images_count;
        data["images_size"] = this.images_size;
        data["scripts_count"] = this.scripts_count;
        data["scripts_size"] = this.scripts_size;
        data["stylesheets_count"] = this.stylesheets_count;
        data["stylesheets_size"] = this.stylesheets_size;
        data["title_length"] = this.title_length;
        data["description_length"] = this.description_length;
        data["render_blocking_scripts_count"] = this.render_blocking_scripts_count;
        data["render_blocking_stylesheets_count"] = this.render_blocking_stylesheets_count;
        data["cumulative_layout_shift"] = this.cumulative_layout_shift;
        data["meta_title"] = this.meta_title;
        data["content"] = this.content ? HtmlContentInfo.fromJS(this.content)?.toJSON() : <any>undefined;
        data["deprecated_tags"] = this.deprecated_tags;
        data["duplicate_meta_tags"] = this.duplicate_meta_tags;
        data["spell"] = this.spell ? HunspellInfo.fromJS(this.spell)?.toJSON() : <any>undefined;
        data["social_media_tags"] = this.social_media_tags;
        data["broken_html"] = this.broken_html ? OnPageResourceIssueInfo.fromJS(this.broken_html)?.toJSON() : <any>undefined;
        return data;
    }
}