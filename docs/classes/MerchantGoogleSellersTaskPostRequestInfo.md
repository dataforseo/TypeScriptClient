[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskPostRequestInfo

# Class: MerchantGoogleSellersTaskPostRequestInfo

## Implements

- [`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskPostRequestInfo.md#constructor)

### Properties

- [additional\_specifications](MerchantGoogleSellersTaskPostRequestInfo.md#additional_specifications)
- [get\_shops\_on\_google](MerchantGoogleSellersTaskPostRequestInfo.md#get_shops_on_google)
- [language\_code](MerchantGoogleSellersTaskPostRequestInfo.md#language_code)
- [language\_name](MerchantGoogleSellersTaskPostRequestInfo.md#language_name)
- [location\_code](MerchantGoogleSellersTaskPostRequestInfo.md#location_code)
- [location\_coordinate](MerchantGoogleSellersTaskPostRequestInfo.md#location_coordinate)
- [location\_name](MerchantGoogleSellersTaskPostRequestInfo.md#location_name)
- [pingback\_url](MerchantGoogleSellersTaskPostRequestInfo.md#pingback_url)
- [postback\_data](MerchantGoogleSellersTaskPostRequestInfo.md#postback_data)
- [postback\_url](MerchantGoogleSellersTaskPostRequestInfo.md#postback_url)
- [priority](MerchantGoogleSellersTaskPostRequestInfo.md#priority)
- [product\_id](MerchantGoogleSellersTaskPostRequestInfo.md#product_id)
- [se\_domain](MerchantGoogleSellersTaskPostRequestInfo.md#se_domain)
- [tag](MerchantGoogleSellersTaskPostRequestInfo.md#tag)

### Methods

- [init](MerchantGoogleSellersTaskPostRequestInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskPostRequestInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskPostRequestInfo**(`data?`): [`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

#### Defined in

[main.ts:165953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165953)

## Properties

### additional\_specifications

• `Optional` **additional\_specifications**: `Object`

object containing additional url parameters
you can get additional information about the product by using the "additional_specifications object, which you can get by making a separate request to the Google Shopping Products endpoint
example:
"additional_specifications": {
"eto": "16157121050167572763_0"
}

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[additional_specifications](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#additional_specifications)

#### Defined in

[main.ts:165917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165917)

___

### get\_shops\_on\_google

• `Optional` **get\_shops\_on\_google**: `boolean`

include “buy on Google” shops
optional field
if set to true, the response will contain the list of sellers that allow to purchase a given product directly on Google
Note: if set to true, the cost of a task will be doubled

#### Implementation of

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[get_shops_on_google](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#get_shops_on_google)

#### Defined in

[main.ts:165910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165910)

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[language_code](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:165898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165898)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[language_name](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:165891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165891)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[location_code](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:165875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165875)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[location_coordinate](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:165884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165884)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[location_name](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:165868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165868)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[pingback_url](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:165949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165949)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[postback_data](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:165939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165939)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[postback_url](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:165933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165933)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[priority](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:165861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165861)

___

### product\_id

• `Optional` **product\_id**: `string`

unique product identifier on Google Shopping
required field
you can get this value making a separate request to the Google Shopping Products endpoint
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[product_id](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#product_id)

#### Defined in

[main.ts:165853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165853)

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

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[se_domain](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#se_domain)

#### Defined in

[main.ts:165905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165905)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IMerchantGoogleSellersTaskPostRequestInfo](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[tag](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:165923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165923)

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

[main.ts:165962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165962)

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

[main.ts:165998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165998)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

#### Defined in

[main.ts:165991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165991)
