[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPagePagesByResourceResultInfo

# Class: OnPagePagesByResourceResultInfo

## Implements

- [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesByResourceResultInfo()

> **new OnPagePagesByResourceResultInfo**(`data`?): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Parameters

• **data?**: [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Defined in

main.ts:158919

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_progress)

#### Defined in

main.ts:158907

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_status)

#### Defined in

main.ts:158909

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items`](../interfaces/IOnPagePagesByResourceResultInfo.md#items)

#### Defined in

main.ts:158915

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#items_count)

#### Defined in

main.ts:158913

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#total_items_count)

#### Defined in

main.ts:158911

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:158928

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:158953

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Defined in

main.ts:158946
