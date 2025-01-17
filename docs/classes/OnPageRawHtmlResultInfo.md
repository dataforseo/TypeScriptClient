[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRawHtmlResultInfo

# Class: OnPageRawHtmlResultInfo

Defined in: main.ts:172252

## Implements

- [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageRawHtmlResultInfo()

> **new OnPageRawHtmlResultInfo**(`data`?): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

Defined in: main.ts:172265

#### Parameters

##### data?

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:172255

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:172257

details of the crawling session

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_status`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageRawHtmlItem`](OnPageRawHtmlItem.md)

Defined in: main.ts:172261

items array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items`](../interfaces/IOnPageRawHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172259

number of items in the results array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items_count`](../interfaces/IOnPageRawHtmlResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172274

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172294

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

Defined in: main.ts:172287

#### Parameters

##### data

`any`

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)
