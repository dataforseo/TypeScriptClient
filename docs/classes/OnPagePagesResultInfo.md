[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPagePagesResultInfo

# Class: OnPagePagesResultInfo

## Implements

- [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesResultInfo()

> **new OnPagePagesResultInfo**(`data`?): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Parameters

• **data?**: [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Defined in

main.ts:155291

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesResultInfo.md#crawl_progress)

#### Defined in

main.ts:155279

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesResultInfo.md#crawl_status)

#### Defined in

main.ts:155281

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`items`](../interfaces/IOnPagePagesResultInfo.md#items)

#### Defined in

main.ts:155287

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`items_count`](../interfaces/IOnPagePagesResultInfo.md#items_count)

#### Defined in

main.ts:155285

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesResultInfo.md#total_items_count)

#### Defined in

main.ts:155283

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:155300

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:155325

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Defined in

main.ts:155318
