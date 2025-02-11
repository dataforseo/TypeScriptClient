[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

Defined in: main.ts:115506

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo()

> **new DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo**(`data`?): [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

Defined in: main.ts:115524

#### Parameters

##### data?

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)[]

Defined in: main.ts:115520

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:115518

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115514

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115511

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:115508

search engine type

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:115516

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115533

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115559

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

Defined in: main.ts:115552

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)
