[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRedirectChainsResultInfo

# Class: OnPageRedirectChainsResultInfo

Defined in: main.ts:170282

## Implements

- [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsResultInfo()

> **new OnPageRedirectChainsResultInfo**(`data`?): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

Defined in: main.ts:170297

#### Parameters

##### data?

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:170285

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:170287

details of the crawling session

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`crawl_status`](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)[]

Defined in: main.ts:170293

items array

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`items`](../interfaces/IOnPageRedirectChainsResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170291

number of items in the results array

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`items_count`](../interfaces/IOnPageRedirectChainsResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:170289

total number of relevant items in the database

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`total_items_count`](../interfaces/IOnPageRedirectChainsResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170306

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170331

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

Defined in: main.ts:170324

#### Parameters

##### data

`any`

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)
