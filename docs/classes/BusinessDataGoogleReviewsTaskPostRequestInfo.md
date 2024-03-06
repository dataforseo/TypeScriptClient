[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTaskPostRequestInfo

# Class: BusinessDataGoogleReviewsTaskPostRequestInfo

## Hierarchy

- [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)
  
  ↳ **`BusinessDataGoogleReviewsTaskPostRequestInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTaskPostRequestInfo.md#constructor)

### Properties

- [cid](BusinessDataGoogleReviewsTaskPostRequestInfo.md#cid)
- [depth](BusinessDataGoogleReviewsTaskPostRequestInfo.md#depth)
- [keyword](BusinessDataGoogleReviewsTaskPostRequestInfo.md#keyword)
- [language\_code](BusinessDataGoogleReviewsTaskPostRequestInfo.md#language_code)
- [language\_name](BusinessDataGoogleReviewsTaskPostRequestInfo.md#language_name)
- [location\_code](BusinessDataGoogleReviewsTaskPostRequestInfo.md#location_code)
- [location\_coordinate](BusinessDataGoogleReviewsTaskPostRequestInfo.md#location_coordinate)
- [location\_name](BusinessDataGoogleReviewsTaskPostRequestInfo.md#location_name)
- [pingback\_url](BusinessDataGoogleReviewsTaskPostRequestInfo.md#pingback_url)
- [place\_id](BusinessDataGoogleReviewsTaskPostRequestInfo.md#place_id)
- [postback\_url](BusinessDataGoogleReviewsTaskPostRequestInfo.md#postback_url)
- [priority](BusinessDataGoogleReviewsTaskPostRequestInfo.md#priority)
- [sort\_by](BusinessDataGoogleReviewsTaskPostRequestInfo.md#sort_by)
- [tag](BusinessDataGoogleReviewsTaskPostRequestInfo.md#tag)

### Methods

- [init](BusinessDataGoogleReviewsTaskPostRequestInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTaskPostRequestInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTaskPostRequestInfo**(`data?`): [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[constructor](BusinessDataTaskRequestInfo.md#constructor)

#### Defined in

[main.ts:197790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197790)

## Properties

### cid

• `Optional` **cid**: `string`

unique, google-defined id of the business entity
required field if you don’t specify keyword or place_id
example:
194604053573767737
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[cid](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#cid)

#### Defined in

[main.ts:197763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197763)

___


### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10
maximum value: 4490

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[depth](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:197776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197776)

___


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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[keyword](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#keyword)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[keyword](BusinessDataTaskRequestInfo.md#keyword)

#### Defined in

[main.ts:183110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183110)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[language_code](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#language_code)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[language_code](BusinessDataTaskRequestInfo.md#language_code)

#### Defined in

[main.ts:183155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183155)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[language_name](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#language_name)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[language_name](BusinessDataTaskRequestInfo.md#language_name)

#### Defined in

[main.ts:183148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183148)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[location_code](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_code)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[location_code](BusinessDataTaskRequestInfo.md#location_code)

#### Defined in

[main.ts:183132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183132)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[location_coordinate](BusinessDataTaskRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:183141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183141)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[location_name](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_name)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[location_name](BusinessDataTaskRequestInfo.md#location_name)

#### Defined in

[main.ts:183125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183125)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[pingback_url](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[pingback_url](BusinessDataTaskRequestInfo.md#pingback_url)

#### Defined in

[main.ts:183181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183181)

___


### place\_id

• `Optional` **place\_id**: `string`

identifier of the business entity in Google Maps
required field if you don’t specify keyword or cid
example:
GhIJQWDl0CIeQUARxks3icF8U8A
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[place_id](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#place_id)

#### Defined in

[main.ts:197769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197769)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[postback_url](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#postback_url)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[postback_url](BusinessDataTaskRequestInfo.md#postback_url)

#### Defined in

[main.ts:183171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183171)

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

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[priority](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#priority)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[priority](BusinessDataTaskRequestInfo.md#priority)

#### Defined in

[main.ts:183118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183118)

___


### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
newest – sort by newest first
highest_rating – sort by highest rating
lowest_rating – sort by lowest rating
relevant – sort by relevance
default value: relevant

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[sort_by](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:197786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197786)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostRequestInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[tag](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#tag)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[tag](BusinessDataTaskRequestInfo.md#tag)

#### Defined in

[main.ts:183161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183161)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[init](BusinessDataTaskRequestInfo.md#init)

#### Defined in

[main.ts:197794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197794)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[toJSON](BusinessDataTaskRequestInfo.md#tojson)

#### Defined in

[main.ts:197815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197815)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[fromJS](BusinessDataTaskRequestInfo.md#fromjs)

#### Defined in

[main.ts:197808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197808)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")