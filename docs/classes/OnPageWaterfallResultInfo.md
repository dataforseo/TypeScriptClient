[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageWaterfallResultInfo

# Class: OnPageWaterfallResultInfo

## Implements

- [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallResultInfo()

> **new OnPageWaterfallResultInfo**(`data`?): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Parameters

• **data?**: [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Defined in

main.ts:159187

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_progress`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_progress)

#### Defined in

main.ts:159177

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`crawl_status`](../interfaces/IOnPageWaterfallResultInfo.md#crawl_status)

#### Defined in

main.ts:159179

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](OnPageWaterfallItem.md)[]

items array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items`](../interfaces/IOnPageWaterfallResultInfo.md#items)

#### Defined in

main.ts:159183

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md).[`items_count`](../interfaces/IOnPageWaterfallResultInfo.md#items_count)

#### Defined in

main.ts:159181

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:159196

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:159220

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Defined in

main.ts:159213
