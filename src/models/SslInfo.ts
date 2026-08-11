export interface ISslInfo   {
        
        /** *ssl certificate validity* indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid */
        valid_certificate?: boolean | undefined
        
        /** *ssl certificate authority* the entity that issued the detected ssl certificate */
        certificate_issuer?: string | undefined
        
        /** *ssl certificate subject* the entity associated with the public key */
        certificate_subject?: string | undefined
        
        /** *ssl certificate version* indicates the version of [X.509](https://en.wikipedia.org/wiki/X.509) used by an ssl certificate */
        certificate_version?: number | undefined
        
        /** *ssl certificate hash* the version of the ssl certificate's hash function */
        certificate_hash?: string | undefined
        
        /** *ssl certificate expiration date* the date and time when the ssl certificate expires in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        certificate_expiration_date?: string | undefined

    [key: string]: any;

    }

export class SslInfo  implements ISslInfo {

    
    /** *ssl certificate validity* indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid */

    valid_certificate?: boolean | undefined;

    
    /** *ssl certificate authority* the entity that issued the detected ssl certificate */

    certificate_issuer?: string | undefined;

    
    /** *ssl certificate subject* the entity associated with the public key */

    certificate_subject?: string | undefined;

    
    /** *ssl certificate version* indicates the version of [X.509](https://en.wikipedia.org/wiki/X.509) used by an ssl certificate */

    certificate_version?: number | undefined;

    
    /** *ssl certificate hash* the version of the ssl certificate's hash function */

    certificate_hash?: string | undefined;

    
    /** *ssl certificate expiration date* the date and time when the ssl certificate expires in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    certificate_expiration_date?: string | undefined;

    [key: string]: any;


    constructor(data?: ISslInfo) {

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
            this.valid_certificate = data["valid_certificate"];
            this.certificate_issuer = data["certificate_issuer"];
            this.certificate_subject = data["certificate_subject"];
            this.certificate_version = data["certificate_version"];
            this.certificate_hash = data["certificate_hash"];
            this.certificate_expiration_date = data["certificate_expiration_date"];
        }
    }

    static fromJS(data: any): SslInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SslInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["valid_certificate"] = this.valid_certificate;
        data["certificate_issuer"] = this.certificate_issuer;
        data["certificate_subject"] = this.certificate_subject;
        data["certificate_version"] = this.certificate_version;
        data["certificate_hash"] = this.certificate_hash;
        data["certificate_expiration_date"] = this.certificate_expiration_date;
        return data;
    }
}