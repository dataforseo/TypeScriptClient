[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePagesByResourceResultInfo

# Class: OnPagePagesByResourceResultInfo

Defined in: main.ts:167556

## Implements

- [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesByResourceResultInfo()

> **new OnPagePagesByResourceResultInfo**(`data`?): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

Defined in: main.ts:167571

#### Parameters

##### data?

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:167559

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:167561

details of the crawling session

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:167567

items array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items`](../interfaces/IOnPagePagesByResourceResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167565

number of items in the results array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:167563

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167580

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167605

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

Defined in: main.ts:167598

#### Parameters

##### data

`any`

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)
