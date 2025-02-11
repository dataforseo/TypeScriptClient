[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingLiveResultInfo

# Class: OnPageContentParsingLiveResultInfo

Defined in: main.ts:174468

## Implements

- [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingLiveResultInfo()

> **new OnPageContentParsingLiveResultInfo**(`data`?): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

Defined in: main.ts:174481

#### Parameters

##### data?

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:174471

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:174473

details of the crawling session

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageContentParsingLiveItem`](OnPageContentParsingLiveItem.md)[]

Defined in: main.ts:174477

items array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:174475

number of items in the results array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174490

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174514

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

Defined in: main.ts:174507

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)
