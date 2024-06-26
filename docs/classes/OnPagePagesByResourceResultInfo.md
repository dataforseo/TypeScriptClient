**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPagePagesByResourceResultInfo

# Class: OnPagePagesByResourceResultInfo

## Implements

- [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesByResourceResultInfo(data)

> **new OnPagePagesByResourceResultInfo**(`data`?): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Parameters

• **data?**: [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Source

main.ts:154224

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_progress)

#### Source

main.ts:154212

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_status)

#### Source

main.ts:154214

***

### items?

> **`optional`** **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items`](../interfaces/IOnPagePagesByResourceResultInfo.md#items)

#### Source

main.ts:154220

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#items_count)

#### Source

main.ts:154218

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#total_items_count)

#### Source

main.ts:154216

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:154233

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:154258

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Source

main.ts:154251
