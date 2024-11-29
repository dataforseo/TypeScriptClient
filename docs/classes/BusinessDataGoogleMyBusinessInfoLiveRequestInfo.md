[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoLiveRequestInfo

# Class: BusinessDataGoogleMyBusinessInfoLiveRequestInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoLiveRequestInfo()

> **new BusinessDataGoogleMyBusinessInfoLiveRequestInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

#### Defined in

main.ts:214709

## Properties

### keyword?

> `optional` **keyword**: `string`

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

#### Defined in

main.ts:214661

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#language_code)

#### Defined in

main.ts:214699

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#language_name)

#### Defined in

main.ts:214692

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#location_code)

#### Defined in

main.ts:214675

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

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

#### Defined in

main.ts:214685

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#location_name)

#### Defined in

main.ts:214668

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveRequestInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveRequestInfo.md#tag)

#### Defined in

main.ts:214705

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:214718

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:214741

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)

#### Defined in

main.ts:214734
