[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageKeywordDensityResultInfo

# Class: OnPageKeywordDensityResultInfo

Defined in: main.ts:171520

## Implements

- [`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageKeywordDensityResultInfo()

> **new OnPageKeywordDensityResultInfo**(`data`?): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

Defined in: main.ts:171536

#### Parameters

##### data?

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:171523

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`crawl_progress`](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:171525

details of the crawling session

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`crawl_status`](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)[]

Defined in: main.ts:171532

items array

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`items`](../interfaces/IOnPageKeywordDensityResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:171530

number of items in the results array

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`items_count`](../interfaces/IOnPageKeywordDensityResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:171528

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`total_items_count`](../interfaces/IOnPageKeywordDensityResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171545

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171570

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

Defined in: main.ts:171563

#### Parameters

##### data

`any`

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)
