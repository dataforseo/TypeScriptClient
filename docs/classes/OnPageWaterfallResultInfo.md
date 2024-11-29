[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageWaterfallResultInfo

# Class: OnPageWaterfallResultInfo

## Implements

- [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallResultInfo()

> **new OnPageWaterfallResultInfo**(`data`?): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Parameters

##### data?

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Defined in

main.ts:170855

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_progress`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_progress)

#### Defined in

main.ts:170845

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_status`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_status)

#### Defined in

main.ts:170847

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](OnPageWaterfallItem.md)[]

items array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items`](../interfaces/IOnPageWaterfallResultInfo.md#items)

#### Defined in

main.ts:170851

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items_count`](../interfaces/IOnPageWaterfallResultInfo.md#items_count)

#### Defined in

main.ts:170849

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:170864

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:170888

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Defined in

main.ts:170881
