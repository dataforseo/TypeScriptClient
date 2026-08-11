export interface IHtmlContentInfo   {
        
        /** *total size of the text on the page measured in bytes* */
        plain_text_size?: number | undefined
        
        /** plaintext rate value plain_text_size to size ratio */
        plain_text_rate?: number | undefined
        
        /** *number of words on the page* */
        plain_text_word_count?: number | undefined
        
        /** *[Automated Readability Index](https://en.wikipedia.org/wiki/Automated_readability_index)* */
        automated_readability_index?: number | undefined
        
        /** *[Coleman–Liau Index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)* */
        coleman_liau_readability_index?: number | undefined
        
        /** *[Dale–Chall Readability Index](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula)* */
        dale_chall_readability_index?: number | undefined
        
        /** *[Flesch–Kincaid Readability Index](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)* */
        flesch_kincaid_readability_index?: number | undefined
        
        /** *[SMOG Readability Index](https://en.wikipedia.org/wiki/SMOG)* */
        smog_readability_index?: number | undefined
        
        /** *consistency of the meta `description` tag with the page content* measured from 0 to 1 */
        description_to_content_consistency?: number | undefined
        
        /** *consistency of the meta `title` tag with the page content* measured from 0 to 1 */
        title_to_content_consistency?: number | undefined
        
        /** *consistency of meta `keywords`tag with the page content* measured from 0 to 1 */
        meta_keywords_to_content_consistency?: number | undefined

    [key: string]: any;

    }

export class HtmlContentInfo  implements IHtmlContentInfo {

    
    /** *total size of the text on the page measured in bytes* */

    plain_text_size?: number | undefined;

    
    /** plaintext rate value plain_text_size to size ratio */

    plain_text_rate?: number | undefined;

    
    /** *number of words on the page* */

    plain_text_word_count?: number | undefined;

    
    /** *[Automated Readability Index](https://en.wikipedia.org/wiki/Automated_readability_index)* */

    automated_readability_index?: number | undefined;

    
    /** *[Coleman–Liau Index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)* */

    coleman_liau_readability_index?: number | undefined;

    
    /** *[Dale–Chall Readability Index](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula)* */

    dale_chall_readability_index?: number | undefined;

    
    /** *[Flesch–Kincaid Readability Index](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)* */

    flesch_kincaid_readability_index?: number | undefined;

    
    /** *[SMOG Readability Index](https://en.wikipedia.org/wiki/SMOG)* */

    smog_readability_index?: number | undefined;

    
    /** *consistency of the meta `description` tag with the page content* measured from 0 to 1 */

    description_to_content_consistency?: number | undefined;

    
    /** *consistency of the meta `title` tag with the page content* measured from 0 to 1 */

    title_to_content_consistency?: number | undefined;

    
    /** *consistency of meta `keywords`tag with the page content* measured from 0 to 1 */

    meta_keywords_to_content_consistency?: number | undefined;

    [key: string]: any;


    constructor(data?: IHtmlContentInfo) {

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
            this.plain_text_size = data["plain_text_size"];
            this.plain_text_rate = data["plain_text_rate"];
            this.plain_text_word_count = data["plain_text_word_count"];
            this.automated_readability_index = data["automated_readability_index"];
            this.coleman_liau_readability_index = data["coleman_liau_readability_index"];
            this.dale_chall_readability_index = data["dale_chall_readability_index"];
            this.flesch_kincaid_readability_index = data["flesch_kincaid_readability_index"];
            this.smog_readability_index = data["smog_readability_index"];
            this.description_to_content_consistency = data["description_to_content_consistency"];
            this.title_to_content_consistency = data["title_to_content_consistency"];
            this.meta_keywords_to_content_consistency = data["meta_keywords_to_content_consistency"];
        }
    }

    static fromJS(data: any): HtmlContentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HtmlContentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["plain_text_size"] = this.plain_text_size;
        data["plain_text_rate"] = this.plain_text_rate;
        data["plain_text_word_count"] = this.plain_text_word_count;
        data["automated_readability_index"] = this.automated_readability_index;
        data["coleman_liau_readability_index"] = this.coleman_liau_readability_index;
        data["dale_chall_readability_index"] = this.dale_chall_readability_index;
        data["flesch_kincaid_readability_index"] = this.flesch_kincaid_readability_index;
        data["smog_readability_index"] = this.smog_readability_index;
        data["description_to_content_consistency"] = this.description_to_content_consistency;
        data["title_to_content_consistency"] = this.title_to_content_consistency;
        data["meta_keywords_to_content_consistency"] = this.meta_keywords_to_content_consistency;
        return data;
    }
}