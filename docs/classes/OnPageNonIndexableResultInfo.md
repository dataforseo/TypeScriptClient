[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageNonIndexableResultInfo

# Class: OnPageNonIndexableResultInfo

Defined in: main.ts:170658

## Implements

- [`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableResultInfo()

> **new OnPageNonIndexableResultInfo**(`data`?): [`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

Defined in: main.ts:170673

#### Parameters

##### data?

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

#### Returns

[`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:170661

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`crawl_progress`](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:170663

details of the crawling session

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`crawl_status`](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)[]

Defined in: main.ts:170669

items array

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`items`](../interfaces/IOnPageNonIndexableResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170667

number of items in the results array

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`items_count`](../interfaces/IOnPageNonIndexableResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:170665

total number of relevant items in the database

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`total_items_count`](../interfaces/IOnPageNonIndexableResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170682

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170707

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

Defined in: main.ts:170700

#### Parameters

##### data

`any`

#### Returns

[`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)
