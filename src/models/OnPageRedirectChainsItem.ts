import { OnPageRedirectLinkItem, IOnPageRedirectLinkItem } from "./BaseOnPageLinkItem";


export interface IOnPageRedirectChainsItem   {
        
        /** *indicates if redirects in `chain` start and end at the same URL* if `true`, the last URL from the chain redirects back to the original URL */
        is_redirect_loop?: boolean | undefined
        
        /** *contains links that form a chain* */
        chain?: OnPageRedirectLinkItem[] | undefined

    [key: string]: any;

    }

export class OnPageRedirectChainsItem  implements IOnPageRedirectChainsItem {

    
    /** *indicates if redirects in `chain` start and end at the same URL* if `true`, the last URL from the chain redirects back to the original URL */

    is_redirect_loop?: boolean | undefined;

    
    /** *contains links that form a chain* */

    chain?: OnPageRedirectLinkItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRedirectChainsItem) {

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
            this.is_redirect_loop = data["is_redirect_loop"];
            if (Array.isArray(data["chain"])) {
                this.chain = [];
                for (let item of data["chain"]) {
                    this.chain.push(OnPageRedirectLinkItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageRedirectChainsItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRedirectChainsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["is_redirect_loop"] = this.is_redirect_loop;
        data["chain"] = null;
        if (Array.isArray(this.chain)) {
            data["chain"] = [];
            for (let item of this.chain) {
                if (item && typeof item.toJSON === "function") {
                    data["chain"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}