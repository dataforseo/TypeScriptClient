**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBBulkKeywordDifficultyLiveItem

# Class: DataforseoLabsBBulkKeywordDifficultyLiveItem

## Implements

- [`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBBulkKeywordDifficultyLiveItem(data)

> **new DataforseoLabsBBulkKeywordDifficultyLiveItem**(`data`?): [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Returns

[`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Source

main.ts:85897

## Properties

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword)

#### Source

main.ts:85888

***

### keyword\_difficulty?

> **`optional`** **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md).[`keyword_difficulty`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword_difficulty)

#### Source

main.ts:85893

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#se_type)

#### Source

main.ts:85886

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:85906

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:85925

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Source

main.ts:85918
