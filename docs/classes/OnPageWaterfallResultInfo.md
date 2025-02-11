[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageWaterfallResultInfo

# Class: OnPageWaterfallResultInfo

Defined in: main.ts:171074

## Implements

- [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallResultInfo()

> **new OnPageWaterfallResultInfo**(`data`?): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

Defined in: main.ts:171087

#### Parameters

##### data?

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:171077

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_progress`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:171079

details of the crawling session

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_status`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](OnPageWaterfallItem.md)[]

Defined in: main.ts:171083

items array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items`](../interfaces/IOnPageWaterfallResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:171081

number of items in the results array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items_count`](../interfaces/IOnPageWaterfallResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171096

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171120

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

Defined in: main.ts:171113

#### Parameters

##### data

`any`

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)
