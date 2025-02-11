[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoLiveRequestInfo

# Class: BusinessDataGoogleMyBusinessInfoLiveRequestInfo

Defined in: main.ts:215214

## Implements

- [`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoLiveRequestInfo()

> **new BusinessDataGoogleMyBusinessInfoLiveRequestInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

Defined in: main.ts:215279

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:215231

keyword
required field
the keyword you specify should indicate the name of the local establishment
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”; 
this field can also be used to pass the following parameters:
cid – a unique, google-defined id of the business entity;
place_id – an identifier of the business entity in Google Maps;
spp – a unique identifier of local services featured in the local_pack element of Google SERP
example:
cid:194604053573767737
place_id:GhIJQWDl0CIeQUARxks3icF8U8A
spp:CgsvZy8xdGN4cWRraBoUChIJPZDrEzLsZIgRoNrpodC5P30
learn more about the cid and place_id identifiers in this help center article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:215269

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:215262

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:215245

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:215255

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:215238

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:215275

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:215288

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:215311

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

Defined in: main.ts:215304

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)
