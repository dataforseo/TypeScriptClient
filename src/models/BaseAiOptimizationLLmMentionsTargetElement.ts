export interface IBaseAiOptimizationLLmMentionsTargetElement   {
        
        /** target domain search scope
optional field
possible values:
any, sources, search_results
default value: any */
        search_scope?: string[] | undefined
        
        /** target domain search filter
optional field
possible values:
include, exclude
default value: include */
        search_filter?: string | undefined

    [key: string]: any;

    }

export class BaseAiOptimizationLLmMentionsTargetElement  implements IBaseAiOptimizationLLmMentionsTargetElement {
    
    /** target domain search scope
optional field
possible values:
any, sources, search_results
default value: any */

    search_scope?: string[] | undefined;
    
    /** target domain search filter
optional field
possible values:
include, exclude
default value: include */

    search_filter?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseAiOptimizationLLmMentionsTargetElement) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.search_scope = data["search_scope"];
            this.search_filter = data["search_filter"];
        }
    }

    static fromJS(data: any): BaseAiOptimizationLLmMentionsTargetElement {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "domain") {

            let result = new AiOptimizationLLmMentionsDomainElement();
            result.init(data);
            return result;
        }
        if (data["type"] === "keyword") {

            let result = new AiOptimizationLLmMentionsKeywordElement();
            result.init(data);
            return result;
        }

        let result = new BaseAiOptimizationLLmMentionsTargetElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search_scope"] = this.search_scope;
        data["search_filter"] = this.search_filter;
        return data;
    }
}

 
export interface IAiOptimizationLLmMentionsDomainElement  extends IBaseAiOptimizationLLmMentionsTargetElement    {
        
        /** target domain
required field if you don’t specify keyword
a domain should be specified without https:// and www. */
        domain?: string | undefined
        
        /** indicates if the subdomains of the target domain will be included in the search
optional field
if set to true, the subdomains will be included in the search
default value: false */
        include_subdomains?: boolean | undefined

    [key: string]: any;

    }

export class AiOptimizationLLmMentionsDomainElement  extends BaseAiOptimizationLLmMentionsTargetElement   implements IAiOptimizationLLmMentionsDomainElement {
    
    /** target domain
required field if you don’t specify keyword
a domain should be specified without https:// and www. */

    domain?: string | undefined;
    
    /** indicates if the subdomains of the target domain will be included in the search
optional field
if set to true, the subdomains will be included in the search
default value: false */

    include_subdomains?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLLmMentionsDomainElement) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
            this.include_subdomains = data["include_subdomains"];
        }
    }

    static fromJS(data: any): AiOptimizationLLmMentionsDomainElement {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLLmMentionsDomainElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["include_subdomains"] = this.include_subdomains;
        return data;
    }
}

 
export interface IAiOptimizationLLmMentionsKeywordElement  extends IBaseAiOptimizationLLmMentionsTargetElement    {
        
        /** target keyword
required field if you don’t specify domain
you can specify up to 2000 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in */
        keyword?: string | undefined
        
        /** target keyword match type
defines how the specified keyword is matched
optional field
possible values:
word_match – full-text search for terms that match the specified seed keyword with additional words included before, after, or within the key phrase (e.g., search for “light” will return results with “light bulb”, “light switch”);
partial_match – substring search that finds all instances containing the specified sequence of characters, even if it appears inside a longer word (e.g., search for “light” will return results with “lighting”, “highlight”);
default value: word_match */
        match_type?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLLmMentionsKeywordElement  extends BaseAiOptimizationLLmMentionsTargetElement   implements IAiOptimizationLLmMentionsKeywordElement {
    
    /** target keyword
required field if you don’t specify domain
you can specify up to 2000 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in */

    keyword?: string | undefined;
    
    /** target keyword match type
defines how the specified keyword is matched
optional field
possible values:
word_match – full-text search for terms that match the specified seed keyword with additional words included before, after, or within the key phrase (e.g., search for “light” will return results with “light bulb”, “light switch”);
partial_match – substring search that finds all instances containing the specified sequence of characters, even if it appears inside a longer word (e.g., search for “light” will return results with “lighting”, “highlight”);
default value: word_match */

    match_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLLmMentionsKeywordElement) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.keyword = data["keyword"];
            this.match_type = data["match_type"];
        }
    }

    static fromJS(data: any): AiOptimizationLLmMentionsKeywordElement {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLLmMentionsKeywordElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["keyword"] = this.keyword;
        data["match_type"] = this.match_type;
        return data;
    }
}