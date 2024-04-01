[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonSellersTaskPostRequestInfo

# Interface: IMerchantAmazonSellersTaskPostRequestInfo

## Implemented by

- [`MerchantAmazonSellersTaskPostRequestInfo`](../classes/MerchantAmazonSellersTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonSellersTaskPostRequestInfo.md#asin)
- [language\_code](IMerchantAmazonSellersTaskPostRequestInfo.md#language_code)
- [language\_name](IMerchantAmazonSellersTaskPostRequestInfo.md#language_name)
- [location\_code](IMerchantAmazonSellersTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IMerchantAmazonSellersTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IMerchantAmazonSellersTaskPostRequestInfo.md#location_name)
- [pingback\_url](IMerchantAmazonSellersTaskPostRequestInfo.md#pingback_url)
- [postback\_data](IMerchantAmazonSellersTaskPostRequestInfo.md#postback_data)
- [postback\_url](IMerchantAmazonSellersTaskPostRequestInfo.md#postback_url)
- [priority](IMerchantAmazonSellersTaskPostRequestInfo.md#priority)
- [se\_domain](IMerchantAmazonSellersTaskPostRequestInfo.md#se_domain)
- [tag](IMerchantAmazonSellersTaskPostRequestInfo.md#tag)

## Properties

### asin

• `Optional` **asin**: `string`

unique product identifier on Amazon
required field
you can get this value making a separate request to the Amazon Products endpoint
note that there is no full list of possible values as the asin values is a dynamic value assigned by Amazon
example:
B085RFFC9Q
learn more about the identifier in this help center guide

#### Defined in

main.ts:179172

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Amazon languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en

#### Defined in

main.ts:179217

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Amazon languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English

#### Defined in

main.ts:179210

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Amazon locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
2840

#### Defined in

main.ts:179194

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Defined in

main.ts:179203

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Amazon locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:179187

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:179256

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Defined in

main.ts:179246

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:179240

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Defined in

main.ts:179180

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.co.uk, amazon.com.au, amazon.de, etc.

#### Defined in

main.ts:179224

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:179230
