**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo(data)

> **new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo**(`data`?): [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Source

main.ts:105506

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

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#keywords)

#### Source

main.ts:105466

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

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_code)

#### Source

main.ts:105496

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

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_name)

#### Source

main.ts:105489

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_code)

#### Source

main.ts:105482

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_name)

#### Source

main.ts:105474

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#tag)

#### Source

main.ts:105502

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:105515

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:105541

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Source

main.ts:105534
