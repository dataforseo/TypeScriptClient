[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskPostRequestInfo

# Class: MerchantGoogleProductSpecTaskPostRequestInfo

## Implements

- [`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskPostRequestInfo.md#constructor)

### Properties

- [additional\_specifications](MerchantGoogleProductSpecTaskPostRequestInfo.md#additional_specifications)
- [language\_code](MerchantGoogleProductSpecTaskPostRequestInfo.md#language_code)
- [language\_name](MerchantGoogleProductSpecTaskPostRequestInfo.md#language_name)
- [location\_code](MerchantGoogleProductSpecTaskPostRequestInfo.md#location_code)
- [location\_coordinate](MerchantGoogleProductSpecTaskPostRequestInfo.md#location_coordinate)
- [location\_name](MerchantGoogleProductSpecTaskPostRequestInfo.md#location_name)
- [pingback\_url](MerchantGoogleProductSpecTaskPostRequestInfo.md#pingback_url)
- [postback\_data](MerchantGoogleProductSpecTaskPostRequestInfo.md#postback_data)
- [postback\_url](MerchantGoogleProductSpecTaskPostRequestInfo.md#postback_url)
- [priority](MerchantGoogleProductSpecTaskPostRequestInfo.md#priority)
- [product\_id](MerchantGoogleProductSpecTaskPostRequestInfo.md#product_id)
- [se\_domain](MerchantGoogleProductSpecTaskPostRequestInfo.md#se_domain)
- [tag](MerchantGoogleProductSpecTaskPostRequestInfo.md#tag)

### Methods

- [init](MerchantGoogleProductSpecTaskPostRequestInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskPostRequestInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskPostRequestInfo**(`data?`): [`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Defined in

main.ts:172807

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[additional_specifications](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#additional_specifications)

#### Defined in

main.ts:172771

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[language_code](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:172757

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[language_name](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:172750

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[location_code](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:172734

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[location_coordinate](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:172743

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[location_name](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:172727

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[pingback_url](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:172803

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[postback_data](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:172793

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[postback_url](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:172787

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[priority](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:172720

___

### product\_id

• `Optional` **product\_id**: `string`

product ID
required field
unique product identifier in Google Shopping
you can receive the product_id by making a separate request to the Google Shopping Products endpoint
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[product_id](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#product_id)

#### Defined in

main.ts:172712

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

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[se_domain](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#se_domain)

#### Defined in

main.ts:172764

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IMerchantGoogleProductSpecTaskPostRequestInfo](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[tag](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:172777

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

main.ts:172816

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

main.ts:172851

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Defined in

main.ts:172844
