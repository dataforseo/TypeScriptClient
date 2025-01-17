[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageWaterfallResultInfo

# Class: OnPageWaterfallResultInfo

Defined in: main.ts:170910

## Implements

- [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallResultInfo()

> **new OnPageWaterfallResultInfo**(`data`?): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

Defined in: main.ts:170923

#### Parameters

##### data?

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:170913

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_progress`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:170915

details of the crawling session

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_status`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](OnPageWaterfallItem.md)[]

Defined in: main.ts:170919

items array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items`](../interfaces/IOnPageWaterfallResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170917

number of items in the results array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items_count`](../interfaces/IOnPageWaterfallResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170932

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170956

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

Defined in: main.ts:170949

#### Parameters

##### data

`any`

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)
