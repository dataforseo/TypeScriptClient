[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourcesResultInfo

# Class: OnPageResourcesResultInfo

Defined in: main.ts:168224

## Implements

- [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageResourcesResultInfo()

> **new OnPageResourcesResultInfo**(`data`?): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

Defined in: main.ts:168239

#### Parameters

##### data?

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:168227

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_progress`](../interfaces/IOnPageResourcesResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:168229

details of the crawling session

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_status`](../interfaces/IOnPageResourcesResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:168235

items array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items`](../interfaces/IOnPageResourcesResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168233

number of items in the results array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items_count`](../interfaces/IOnPageResourcesResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:168231

total number of relevant items crawled

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`total_items_count`](../interfaces/IOnPageResourcesResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168248

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168273

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

Defined in: main.ts:168266

#### Parameters

##### data

`any`

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)
