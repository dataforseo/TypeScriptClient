[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBulkKeywordDifficultyLiveItem

# Class: DataforseoLabsBulkKeywordDifficultyLiveItem

## Implements

- [`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBulkKeywordDifficultyLiveItem()

> **new DataforseoLabsBulkKeywordDifficultyLiveItem**(`data`?): [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Returns

[`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Defined in

main.ts:96079

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#keyword)

#### Defined in

main.ts:96070

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`keyword_difficulty`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#keyword_difficulty)

#### Defined in

main.ts:96075

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#se_type)

#### Defined in

main.ts:96068

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:96088

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:96107

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Defined in

main.ts:96100
