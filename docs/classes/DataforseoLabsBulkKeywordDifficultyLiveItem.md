[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBulkKeywordDifficultyLiveItem

# Class: DataforseoLabsBulkKeywordDifficultyLiveItem

Defined in: main.ts:96134

## Implements

- [`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBulkKeywordDifficultyLiveItem()

> **new DataforseoLabsBulkKeywordDifficultyLiveItem**(`data`?): [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

Defined in: main.ts:96147

#### Parameters

##### data?

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Returns

[`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:96138

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#keyword)

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

Defined in: main.ts:96143

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`keyword_difficulty`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#keyword_difficulty)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:96136

search engine type

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96156

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96175

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

Defined in: main.ts:96168

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)
