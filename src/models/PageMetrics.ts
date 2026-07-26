export interface IPageMetrics   {
        
        /** number of external links the number of links pointing to other websites */
        links_external?: number | undefined
        
        /** number of internal links the number of links pointing to other pages within the target website */
        links_internal?: number | undefined
        
        /** number of pages with duplicate titles */
        duplicate_title?: number | undefined
        
        /** number of pages with duplicate descriptions */
        duplicate_description?: number | undefined
        
        /** number of pages with duplicate content */
        duplicate_content?: number | undefined
        
        /** number of broken links number of broken links across all crawled pages on a target website */
        broken_links?: number | undefined
        
        /** number of broken resources the number of images and other resources with broken links */
        broken_resources?: number | undefined
        
        /** number of links present on the target website that may have a conflict for example, if 'links_relation_conflict': 2, the target website is referring to the same source by at least one internal link with the rel='nofollow' attribute and by at least one dofollow link */
        links_relation_conflict?: number | undefined
        
        /** number of redirect chains that start and end at the same URL number of redirect chains where the destination URL redirects back to the original URL */
        redirect_loop?: number | undefined
        
        /** shows how website is optimized on a 100-point scale this field shows how website is optimized considering critical on-page issues and warnings detected; 100 is the highest possible score that means website does not have any critical on-page issues and important warnings; note that this value depends on the number of crawled pages; learn more about how the metric is calculated in this help center article */
        onpage_score?: number | undefined
        
        /** number of non-indexable pages number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings; you can receive a list of non-indexable URLs using this endpoint */
        non_indexable?: number | undefined
        
        /** page-specific on-page check-ups */
        checks?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class PageMetrics  implements IPageMetrics {

    
    /** number of external links the number of links pointing to other websites */

    links_external?: number | undefined;

    
    /** number of internal links the number of links pointing to other pages within the target website */

    links_internal?: number | undefined;

    
    /** number of pages with duplicate titles */

    duplicate_title?: number | undefined;

    
    /** number of pages with duplicate descriptions */

    duplicate_description?: number | undefined;

    
    /** number of pages with duplicate content */

    duplicate_content?: number | undefined;

    
    /** number of broken links number of broken links across all crawled pages on a target website */

    broken_links?: number | undefined;

    
    /** number of broken resources the number of images and other resources with broken links */

    broken_resources?: number | undefined;

    
    /** number of links present on the target website that may have a conflict for example, if 'links_relation_conflict': 2, the target website is referring to the same source by at least one internal link with the rel='nofollow' attribute and by at least one dofollow link */

    links_relation_conflict?: number | undefined;

    
    /** number of redirect chains that start and end at the same URL number of redirect chains where the destination URL redirects back to the original URL */

    redirect_loop?: number | undefined;

    
    /** shows how website is optimized on a 100-point scale this field shows how website is optimized considering critical on-page issues and warnings detected; 100 is the highest possible score that means website does not have any critical on-page issues and important warnings; note that this value depends on the number of crawled pages; learn more about how the metric is calculated in this help center article */

    onpage_score?: number | undefined;

    
    /** number of non-indexable pages number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings; you can receive a list of non-indexable URLs using this endpoint */

    non_indexable?: number | undefined;

    
    /** page-specific on-page check-ups */

    checks?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IPageMetrics) {

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
            this.links_external = data["links_external"];
            this.links_internal = data["links_internal"];
            this.duplicate_title = data["duplicate_title"];
            this.duplicate_description = data["duplicate_description"];
            this.duplicate_content = data["duplicate_content"];
            this.broken_links = data["broken_links"];
            this.broken_resources = data["broken_resources"];
            this.links_relation_conflict = data["links_relation_conflict"];
            this.redirect_loop = data["redirect_loop"];
            this.onpage_score = data["onpage_score"];
            this.non_indexable = data["non_indexable"];
            this.checks = data["checks"];
        }
    }

    static fromJS(data: any): PageMetrics {
        data = typeof data === 'object' ? data : {};


        let result = new PageMetrics();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["links_external"] = this.links_external;
        data["links_internal"] = this.links_internal;
        data["duplicate_title"] = this.duplicate_title;
        data["duplicate_description"] = this.duplicate_description;
        data["duplicate_content"] = this.duplicate_content;
        data["broken_links"] = this.broken_links;
        data["broken_resources"] = this.broken_resources;
        data["links_relation_conflict"] = this.links_relation_conflict;
        data["redirect_loop"] = this.redirect_loop;
        data["onpage_score"] = this.onpage_score;
        data["non_indexable"] = this.non_indexable;
        data["checks"] = this.checks;
        return data;
    }
}