# SslInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**valid_certificate** | **boolean** | *ssl certificate validity*. indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid |[optional]|
**certificate_issuer** | **string** | *ssl certificate authority*. the entity that issued the detected ssl certificate |[optional]|
**certificate_subject** | **string** | *ssl certificate subject*. the entity associated with the public key |[optional]|
**certificate_version** | **number** | *ssl certificate version*. indicates the version of [X.509](https://en.wikipedia.org/wiki/X.509) used by an ssl certificate |[optional]|
**certificate_hash** | **string** | *ssl certificate hash*. the version of the ssl certificate's hash function |[optional]|
**certificate_expiration_date** | **string** | *ssl certificate expiration date*. the date and time when the ssl certificate expires. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|