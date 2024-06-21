**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPagePagesResultInfo

# Class: OnPagePagesResultInfo

## Implements

- [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesResultInfo(data)

> **new OnPagePagesResultInfo**(`data`?): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Parameters

• **data?**: [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Source

main.ts:153596

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesResultInfo.md#crawl_progress)

#### Source

main.ts:153584

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesResultInfo.md#crawl_status)

#### Source

main.ts:153586

***

### items?

> **`optional`** **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`items`](../interfaces/IOnPagePagesResultInfo.md#items)

#### Source

main.ts:153592

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`items_count`](../interfaces/IOnPagePagesResultInfo.md#items_count)

#### Source

main.ts:153590

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesResultInfo.md#total_items_count)

#### Source

main.ts:153588

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:153605

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:153630

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Source

main.ts:153623
