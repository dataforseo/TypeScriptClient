[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageKeywordDensityResultInfo

# Class: OnPageKeywordDensityResultInfo

## Implements

- [`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageKeywordDensityResultInfo()

> **new OnPageKeywordDensityResultInfo**(`data`?): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Parameters

##### data?

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Defined in

main.ts:171304

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`crawl_progress`](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_progress)

#### Defined in

main.ts:171291

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`crawl_status`](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_status)

#### Defined in

main.ts:171293

***

### items?

> `optional` **items**: [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)[]

items array

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`items`](../interfaces/IOnPageKeywordDensityResultInfo.md#items)

#### Defined in

main.ts:171300

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`items_count`](../interfaces/IOnPageKeywordDensityResultInfo.md#items_count)

#### Defined in

main.ts:171298

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters

#### Implementation of

[`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md).[`total_items_count`](../interfaces/IOnPageKeywordDensityResultInfo.md#total_items_count)

#### Defined in

main.ts:171296

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:171313

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:171338

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Defined in

main.ts:171331
