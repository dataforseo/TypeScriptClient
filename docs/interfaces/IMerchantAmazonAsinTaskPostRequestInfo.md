[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonAsinTaskPostRequestInfo

# Interface: IMerchantAmazonAsinTaskPostRequestInfo

## Implemented by

- [`MerchantAmazonAsinTaskPostRequestInfo`](../classes/MerchantAmazonAsinTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonAsinTaskPostRequestInfo.md#asin)
- [language\_code](IMerchantAmazonAsinTaskPostRequestInfo.md#language_code)
- [language\_name](IMerchantAmazonAsinTaskPostRequestInfo.md#language_name)
- [location\_code](IMerchantAmazonAsinTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IMerchantAmazonAsinTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IMerchantAmazonAsinTaskPostRequestInfo.md#location_name)
- [pingback\_url](IMerchantAmazonAsinTaskPostRequestInfo.md#pingback_url)
- [postback\_data](IMerchantAmazonAsinTaskPostRequestInfo.md#postback_data)
- [postback\_url](IMerchantAmazonAsinTaskPostRequestInfo.md#postback_url)
- [priority](IMerchantAmazonAsinTaskPostRequestInfo.md#priority)
- [se\_domain](IMerchantAmazonAsinTaskPostRequestInfo.md#se_domain)
- [tag](IMerchantAmazonAsinTaskPostRequestInfo.md#tag)

## Properties

### asin

• `Optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) in Amazon
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Defined in

[main.ts:171925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171925)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en_GB

#### Defined in

[main.ts:171972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171972)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English (United Kingdom)

#### Defined in

[main.ts:171965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171965)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/merchant/amazon/locations
example:
9045969

#### Defined in

[main.ts:171948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171948)

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

[main.ts:171957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171957)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
HA1,England,United Kingdom

#### Defined in

[main.ts:171940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171940)

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

[main.ts:172011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172011)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Defined in

[main.ts:172001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172001)

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

[main.ts:171995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171995)

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

[main.ts:171933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171933)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.com, amazon.co.uk, amazon.fr, etc.

#### Defined in

[main.ts:171979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171979)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:171985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171985)
