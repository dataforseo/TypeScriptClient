[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageResourcesResultInfo

# Class: OnPageResourcesResultInfo

## Implements

- [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourcesResultInfo()

> **new OnPageResourcesResultInfo**(`data`?): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Parameters

• **data?**: [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Defined in

main.ts:156444

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_progress`](../interfaces/IOnPageResourcesResultInfo.md#crawl_progress)

#### Defined in

main.ts:156432

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_status`](../interfaces/IOnPageResourcesResultInfo.md#crawl_status)

#### Defined in

main.ts:156434

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items`](../interfaces/IOnPageResourcesResultInfo.md#items)

#### Defined in

main.ts:156440

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items_count`](../interfaces/IOnPageResourcesResultInfo.md#items_count)

#### Defined in

main.ts:156438

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items crawled

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`total_items_count`](../interfaces/IOnPageResourcesResultInfo.md#total_items_count)

#### Defined in

main.ts:156436

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:156453

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:156478

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Defined in

main.ts:156471
