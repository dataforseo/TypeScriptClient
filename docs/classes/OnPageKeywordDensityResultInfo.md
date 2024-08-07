**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageKeywordDensityResultInfo

# Class: OnPageKeywordDensityResultInfo

## Implements

- [`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageKeywordDensityResultInfo(data)

> **new OnPageKeywordDensityResultInfo**(`data`?): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Parameters

• **data?**: [`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Source

main.ts:161874

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`crawl_progress`](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_progress)

#### Source

main.ts:161861

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`crawl_status`](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_status)

#### Source

main.ts:161863

***

### items?

> **`optional`** **items**: [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)[]

items array

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`items`](../interfaces/IOnPageKeywordDensityResultInfo.md#items)

#### Source

main.ts:161870

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`items_count`](../interfaces/IOnPageKeywordDensityResultInfo.md#items_count)

#### Source

main.ts:161868

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`total_items_count`](../interfaces/IOnPageKeywordDensityResultInfo.md#total_items_count)

#### Source

main.ts:161866

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161883

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161908

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Source

main.ts:161901
