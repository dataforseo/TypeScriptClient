[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePagesResultInfo

# Class: OnPagePagesResultInfo

Defined in: main.ts:167176

## Implements

- [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesResultInfo()

> **new OnPagePagesResultInfo**(`data`?): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

Defined in: main.ts:167191

#### Parameters

##### data?

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:167179

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:167181

details of the crawling session

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:167187

items array

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`items`](../interfaces/IOnPagePagesResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167185

number of items in the results array

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`items_count`](../interfaces/IOnPagePagesResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:167183

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167200

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167225

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

Defined in: main.ts:167218

#### Parameters

##### data

`any`

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)
