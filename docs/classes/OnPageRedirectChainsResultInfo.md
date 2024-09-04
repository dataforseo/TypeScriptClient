[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageRedirectChainsResultInfo

# Class: OnPageRedirectChainsResultInfo

## Implements

- [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsResultInfo()

> **new OnPageRedirectChainsResultInfo**(`data`?): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Parameters

• **data?**: [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Defined in

main.ts:162467

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_progress)

#### Defined in

main.ts:162455

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`crawl_status`](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_status)

#### Defined in

main.ts:162457

***

### items?

> `optional` **items**: [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)[]

items array

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`items`](../interfaces/IOnPageRedirectChainsResultInfo.md#items)

#### Defined in

main.ts:162463

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`items_count`](../interfaces/IOnPageRedirectChainsResultInfo.md#items_count)

#### Defined in

main.ts:162461

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`total_items_count`](../interfaces/IOnPageRedirectChainsResultInfo.md#total_items_count)

#### Defined in

main.ts:162459

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:162476

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:162501

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Defined in

main.ts:162494
