[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

Defined in: main.ts:115356

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo()

> **new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo**(`data`?): [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

Defined in: main.ts:115403

#### Parameters

##### data?

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:115363

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115393

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:115386

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115379

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:115371

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:115399

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115412

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115438

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

Defined in: main.ts:115431

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)
