[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo()

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Defined in

main.ts:87544

## Properties

### keywords?

> `optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#keywords)

#### Defined in

main.ts:87506

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_code)

#### Defined in

main.ts:87534

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_name)

#### Defined in

main.ts:87527

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_code)

#### Defined in

main.ts:87520

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_name)

#### Defined in

main.ts:87513

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#tag)

#### Defined in

main.ts:87540

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:87553

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:87579

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Defined in

main.ts:87572
