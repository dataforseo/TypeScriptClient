import { LinkElement, ILinkElement } from "./LinkElement";
import { AmazonLabelElement, IAmazonLabelElement } from "./AmazonLabelElement";
import { FormatsElement, IFormatsElement } from "./FormatsElement";
import { AuthorsElement, IAuthorsElement } from "./AuthorsElement";
import { PeriodCovered, IPeriodCovered } from "./PeriodCovered";
import { DatasetDescription, IDatasetDescription } from "./DatasetDescription";


export interface IDataset   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** ID of the dataset */
        dataset_id?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** count of articles that refer to the dataset */
        scholarly_citations_count?: number | undefined
        
        /** url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22 */
        scholarly_articles_url?: string | undefined
        
        /** digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3 */
        unique_identifier?: string | undefined
        
        /** link to related article
link to the published article that is related to the dataset */
        related_article?: string | undefined
        
        /** sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** the list of institutions that provided the dataset */
        dataset_providers?: AmazonLabelElement[] | undefined
        
        /** the list of file formats of the dataset */
        formats?: FormatsElement[] | undefined
        
        /** the list of authors of the dataset */
        authors?: AuthorsElement[] | undefined
        
        /** the list of licenses issued to the dataset */
        licenses?: AmazonLabelElement[] | undefined
        
        /** date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00 */
        updated_date?: string | undefined
        
        /** the list of areas covered in the dataset
for example: Africa, Global */
        area_covered?: string[] | undefined
        
        /** period covered in the dataset */
        period_covered?: PeriodCovered | undefined
        
        /** description of the dataset */
        dataset_description?: DatasetDescription | undefined

    [key: string]: any;

    }

export class Dataset  implements IDataset {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;
    
    /** ID of the dataset */

    dataset_id?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** count of articles that refer to the dataset */

    scholarly_citations_count?: number | undefined;
    
    /** url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22 */

    scholarly_articles_url?: string | undefined;
    
    /** digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3 */

    unique_identifier?: string | undefined;
    
    /** link to related article
link to the published article that is related to the dataset */

    related_article?: string | undefined;
    
    /** sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** the list of institutions that provided the dataset */

    dataset_providers?: AmazonLabelElement[] | undefined;
    
    /** the list of file formats of the dataset */

    formats?: FormatsElement[] | undefined;
    
    /** the list of authors of the dataset */

    authors?: AuthorsElement[] | undefined;
    
    /** the list of licenses issued to the dataset */

    licenses?: AmazonLabelElement[] | undefined;
    
    /** date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00 */

    updated_date?: string | undefined;
    
    /** the list of areas covered in the dataset
for example: Africa, Global */

    area_covered?: string[] | undefined;
    
    /** period covered in the dataset */

    period_covered?: PeriodCovered | undefined;
    
    /** description of the dataset */

    dataset_description?: DatasetDescription | undefined;

    [key: string]: any;


    constructor(data?: IDataset) {

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
            this.dataset_id = data["dataset_id"];
            this.title = data["title"];
            this.image_url = data["image_url"];
            this.scholarly_citations_count = data["scholarly_citations_count"];
            this.scholarly_articles_url = data["scholarly_articles_url"];
            this.unique_identifier = data["unique_identifier"];
            this.related_article = data["related_article"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            if (Array.isArray(data["dataset_providers"])) {
                this.dataset_providers = [];
                for (let item of data["dataset_providers"]) {
                    this.dataset_providers.push(AmazonLabelElement.fromJS(item));
                }
            }
            if (Array.isArray(data["formats"])) {
                this.formats = [];
                for (let item of data["formats"]) {
                    this.formats.push(FormatsElement.fromJS(item));
                }
            }
            if (Array.isArray(data["authors"])) {
                this.authors = [];
                for (let item of data["authors"]) {
                    this.authors.push(AuthorsElement.fromJS(item));
                }
            }
            if (Array.isArray(data["licenses"])) {
                this.licenses = [];
                for (let item of data["licenses"]) {
                    this.licenses.push(AmazonLabelElement.fromJS(item));
                }
            }
            this.updated_date = data["updated_date"];
            this.area_covered = data["area_covered"];
            this.period_covered = data["period_covered"] ? PeriodCovered.fromJS(data["period_covered"]) : <any>undefined;
            this.dataset_description = data["dataset_description"] ? DatasetDescription.fromJS(data["dataset_description"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Dataset {
        data = typeof data === 'object' ? data : {};


        let result = new Dataset();
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
        data["dataset_id"] = this.dataset_id;
        data["title"] = this.title;
        data["image_url"] = this.image_url;
        data["scholarly_citations_count"] = this.scholarly_citations_count;
        data["scholarly_articles_url"] = this.scholarly_articles_url;
        data["unique_identifier"] = this.unique_identifier;
        data["related_article"] = this.related_article;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["dataset_providers"] = null;
        if (Array.isArray(this.dataset_providers)) {
            data["dataset_providers"] = [];
            for (let item of this.dataset_providers) {
                if (item && typeof item.toJSON === "function") {
                    data["dataset_providers"].push(item?.toJSON());
                }
            }
        }
        data["formats"] = null;
        if (Array.isArray(this.formats)) {
            data["formats"] = [];
            for (let item of this.formats) {
                if (item && typeof item.toJSON === "function") {
                    data["formats"].push(item?.toJSON());
                }
            }
        }
        data["authors"] = null;
        if (Array.isArray(this.authors)) {
            data["authors"] = [];
            for (let item of this.authors) {
                if (item && typeof item.toJSON === "function") {
                    data["authors"].push(item?.toJSON());
                }
            }
        }
        data["licenses"] = null;
        if (Array.isArray(this.licenses)) {
            data["licenses"] = [];
            for (let item of this.licenses) {
                if (item && typeof item.toJSON === "function") {
                    data["licenses"].push(item?.toJSON());
                }
            }
        }
        data["updated_date"] = this.updated_date;
        data["area_covered"] = this.area_covered;
        data["period_covered"] = this.period_covered ? PeriodCovered.fromJS(this.period_covered)?.toJSON() : <any>undefined;
        data["dataset_description"] = this.dataset_description ? DatasetDescription.fromJS(this.dataset_description)?.toJSON() : <any>undefined;
        return data;
    }
}