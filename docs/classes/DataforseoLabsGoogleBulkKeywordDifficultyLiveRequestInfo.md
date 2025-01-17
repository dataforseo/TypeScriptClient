[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

Defined in: main.ts:95988

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo()

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

Defined in: main.ts:96033

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:95995

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:96023

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:96016

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:96009

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:96002

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:96029

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96042

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96068

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

Defined in: main.ts:96061

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)
