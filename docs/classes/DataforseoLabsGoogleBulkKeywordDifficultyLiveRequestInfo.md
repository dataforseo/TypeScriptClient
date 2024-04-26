**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo(data)

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Source

main.ts:84784

## Properties

### keywords?

> **`optional`** **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#keywords)

#### Source

main.ts:84746

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_code)

#### Source

main.ts:84774

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_name)

#### Source

main.ts:84767

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_code)

#### Source

main.ts:84760

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_name)

#### Source

main.ts:84753

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#tag)

#### Source

main.ts:84780

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:84793

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:84819

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Source

main.ts:84812
