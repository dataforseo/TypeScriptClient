[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTaskRequestInfo

# Class: BusinessDataTaskRequestInfo

## Hierarchy

- **`BusinessDataTaskRequestInfo`**

  ↳ [`BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)

  ↳ [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

  ↳ [`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)

  ↳ [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

## Implements

- [`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTaskRequestInfo.md#constructor)

### Properties

- [keyword](BusinessDataTaskRequestInfo.md#keyword)
- [language\_code](BusinessDataTaskRequestInfo.md#language_code)
- [language\_name](BusinessDataTaskRequestInfo.md#language_name)
- [location\_code](BusinessDataTaskRequestInfo.md#location_code)
- [location\_coordinate](BusinessDataTaskRequestInfo.md#location_coordinate)
- [location\_name](BusinessDataTaskRequestInfo.md#location_name)
- [pingback\_url](BusinessDataTaskRequestInfo.md#pingback_url)
- [postback\_url](BusinessDataTaskRequestInfo.md#postback_url)
- [priority](BusinessDataTaskRequestInfo.md#priority)
- [tag](BusinessDataTaskRequestInfo.md#tag)

### Methods

- [init](BusinessDataTaskRequestInfo.md#init)
- [toJSON](BusinessDataTaskRequestInfo.md#tojson)
- [fromJS](BusinessDataTaskRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTaskRequestInfo**(`data?`): [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md) |

#### Returns

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Defined in

main.ts:183305

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword
required field
the keyword you specify should indicate the name of the local establishment
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”; 
this field can also be used to pass the following parameters:
cid – a unique, google-defined id of the business entity;
place_id – an identifier of the business entity in Google Maps;
spp – a unique identifier of local services featured in the local_pack element of Google SERP
example:
cid:194604053573767737
place_id:GhIJQWDl0CIeQUARxks3icF8U8A
spp:CgsvZy8xdGN4cWRraBoUChIJPZDrEzLsZIgRoNrpodC5P30
learn more about the cid and place_id identifiers in this help center article

#### Implementation of

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[keyword](../interfaces/IBusinessDataTaskRequestInfo.md#keyword)

#### Defined in

main.ts:183230

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[language_code](../interfaces/IBusinessDataTaskRequestInfo.md#language_code)

#### Defined in

main.ts:183275

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[language_name](../interfaces/IBusinessDataTaskRequestInfo.md#language_name)

#### Defined in

main.ts:183268

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[location_code](../interfaces/IBusinessDataTaskRequestInfo.md#location_code)

#### Defined in

main.ts:183252

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

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:183261

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[location_name](../interfaces/IBusinessDataTaskRequestInfo.md#location_name)

#### Defined in

main.ts:183245

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

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[pingback_url](../interfaces/IBusinessDataTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:183301

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

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[postback_url](../interfaces/IBusinessDataTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:183291

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

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[priority](../interfaces/IBusinessDataTaskRequestInfo.md#priority)

#### Defined in

main.ts:183238

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataTaskRequestInfo](../interfaces/IBusinessDataTaskRequestInfo.md).[tag](../interfaces/IBusinessDataTaskRequestInfo.md#tag)

#### Defined in

main.ts:183281

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

main.ts:183314

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

main.ts:183340

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Defined in

main.ts:183333
