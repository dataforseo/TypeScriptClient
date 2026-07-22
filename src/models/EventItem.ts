import { EventDates, IEventDates } from "./EventDates";
import { LocationInfo, ILocationInfo } from "./LocationInfo";
import { AiModeLinkElementInfo, IAiModeLinkElementInfo } from "./AiModeLinkElementInfo";


export interface IEventItem   {
        
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
        
        /** title of the element */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** URL of the image featured in the element */
        image_url?: string | undefined
        
        /** dates when the event takes place
if there are none, equals null */
        event_dates?: EventDates | undefined
        
        /** information about the event’s venue */
        location_info?: LocationInfo | undefined
        
        /** additional information and ticket purchase options */
        information_and_tickets?: AiModeLinkElementInfo[] | undefined

    [key: string]: any;

    }

export class EventItem  implements IEventItem {

    
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

    
    /** title of the element */

    title?: string | undefined;

    
    /** description of the results element in SERP */

    description?: string | undefined;

    
    /** search URL with refinement parameters */

    url?: string | undefined;

    
    /** URL of the image featured in the element */

    image_url?: string | undefined;

    
    /** dates when the event takes place
if there are none, equals null */

    event_dates?: EventDates | undefined;

    
    /** information about the event’s venue */

    location_info?: LocationInfo | undefined;

    
    /** additional information and ticket purchase options */

    information_and_tickets?: AiModeLinkElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IEventItem) {

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
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.event_dates = data["event_dates"] ? EventDates.fromJS(data["event_dates"]) : <any>undefined;
            this.location_info = data["location_info"] ? LocationInfo.fromJS(data["location_info"]) : <any>undefined;
            if (Array.isArray(data["information_and_tickets"])) {
                this.information_and_tickets = [];
                for (let item of data["information_and_tickets"]) {
                    this.information_and_tickets.push(AiModeLinkElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): EventItem {
        data = typeof data === 'object' ? data : {};


        let result = new EventItem();
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
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["event_dates"] = this.event_dates ? EventDates.fromJS(this.event_dates)?.toJSON() : <any>undefined;
        data["location_info"] = this.location_info ? LocationInfo.fromJS(this.location_info)?.toJSON() : <any>undefined;
        data["information_and_tickets"] = null;
        if (Array.isArray(this.information_and_tickets)) {
            data["information_and_tickets"] = [];
            for (let item of this.information_and_tickets) {
                if (item && typeof item.toJSON === "function") {
                    data["information_and_tickets"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}