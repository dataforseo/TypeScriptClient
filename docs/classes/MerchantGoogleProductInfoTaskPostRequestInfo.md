[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTaskPostRequestInfo

# Class: MerchantGoogleProductInfoTaskPostRequestInfo

## Implements

- [`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTaskPostRequestInfo.md#constructor)

### Properties

- [language\_code](MerchantGoogleProductInfoTaskPostRequestInfo.md#language_code)
- [language\_name](MerchantGoogleProductInfoTaskPostRequestInfo.md#language_name)
- [location\_code](MerchantGoogleProductInfoTaskPostRequestInfo.md#location_code)
- [location\_coordinate](MerchantGoogleProductInfoTaskPostRequestInfo.md#location_coordinate)
- [location\_name](MerchantGoogleProductInfoTaskPostRequestInfo.md#location_name)
- [pingback\_url](MerchantGoogleProductInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](MerchantGoogleProductInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](MerchantGoogleProductInfoTaskPostRequestInfo.md#postback_url)
- [priority](MerchantGoogleProductInfoTaskPostRequestInfo.md#priority)
- [product\_id](MerchantGoogleProductInfoTaskPostRequestInfo.md#product_id)
- [se\_domain](MerchantGoogleProductInfoTaskPostRequestInfo.md#se_domain)
- [tag](MerchantGoogleProductInfoTaskPostRequestInfo.md#tag)

### Methods

- [init](MerchantGoogleProductInfoTaskPostRequestInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTaskPostRequestInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTaskPostRequestInfo**(`data?`): [`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

#### Defined in

[main.ts:168517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168517)

## Properties

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[language_code](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:168474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168474)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[language_name](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:168467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168467)

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[location_code](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:168451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168451)

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

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[location_coordinate](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:168460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168460)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[location_name](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:168444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168444)

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

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[pingback_url](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:168513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168513)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[postback_data](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:168503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168503)

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

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[postback_url](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:168497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168497)

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

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[priority](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:168437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168437)

___

### product\_id

• `Optional` **product\_id**: `string`

product ID
required field
unique product identifier in Google Shopping
you can receive the product_id by making a separate request to the Google Shopping Products endpoint
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[product_id](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#product_id)

#### Defined in

[main.ts:168429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168429)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[se_domain](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#se_domain)

#### Defined in

[main.ts:168481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168481)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IMerchantGoogleProductInfoTaskPostRequestInfo](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[tag](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:168487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168487)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:168526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168526)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:168554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168554)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

#### Defined in

[main.ts:168547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168547)
