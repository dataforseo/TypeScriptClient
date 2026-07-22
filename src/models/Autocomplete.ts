export interface IAutocomplete   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni */
        relevance?: number | undefined
        
        /** google autocomplete keyword suggestion */
        suggestion?: string | undefined
        
        /** google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni */
        suggestion_type?: string | undefined
        
        /** url to search results
url to search results relevant to the google autocomplete suggestion */
        search_query_url?: string | undefined
        
        /** url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp */
        thumbnail_url?: string | undefined
        
        /** keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local */
        highlighted?: string[] | undefined

    [key: string]: any;

    }

export class Autocomplete  implements IAutocomplete {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni */

    relevance?: number | undefined;

    
    /** google autocomplete keyword suggestion */

    suggestion?: string | undefined;

    
    /** google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni */

    suggestion_type?: string | undefined;

    
    /** url to search results
url to search results relevant to the google autocomplete suggestion */

    search_query_url?: string | undefined;

    
    /** url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp */

    thumbnail_url?: string | undefined;

    
    /** keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local */

    highlighted?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IAutocomplete) {

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
            this.relevance = data["relevance"];
            this.suggestion = data["suggestion"];
            this.suggestion_type = data["suggestion_type"];
            this.search_query_url = data["search_query_url"];
            this.thumbnail_url = data["thumbnail_url"];
            this.highlighted = data["highlighted"];
        }
    }

    static fromJS(data: any): Autocomplete {
        data = typeof data === 'object' ? data : {};


        let result = new Autocomplete();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["relevance"] = this.relevance;
        data["suggestion"] = this.suggestion;
        data["suggestion_type"] = this.suggestion_type;
        data["search_query_url"] = this.search_query_url;
        data["thumbnail_url"] = this.thumbnail_url;
        data["highlighted"] = this.highlighted;
        return data;
    }
}