[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageNonIndexableResultInfo

# Class: OnPageNonIndexableResultInfo

## Implements

- [`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableResultInfo()

> **new OnPageNonIndexableResultInfo**(`data`?): [`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Parameters

• **data?**: [`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

#### Returns

[`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Defined in

main.ts:162843

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`crawl_progress`](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_progress)

#### Defined in

main.ts:162831

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`crawl_status`](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_status)

#### Defined in

main.ts:162833

***

### items?

> `optional` **items**: [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)[]

items array

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`items`](../interfaces/IOnPageNonIndexableResultInfo.md#items)

#### Defined in

main.ts:162839

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`items_count`](../interfaces/IOnPageNonIndexableResultInfo.md#items_count)

#### Defined in

main.ts:162837

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`total_items_count`](../interfaces/IOnPageNonIndexableResultInfo.md#total_items_count)

#### Defined in

main.ts:162835

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:162852

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:162877

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Defined in

main.ts:162870
