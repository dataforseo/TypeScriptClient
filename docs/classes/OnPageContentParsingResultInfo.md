[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingResultInfo

# Class: OnPageContentParsingResultInfo

Defined in: main.ts:173086

## Implements

- [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingResultInfo()

> **new OnPageContentParsingResultInfo**(`data`?): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

Defined in: main.ts:173099

#### Parameters

##### data?

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:173089

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:173091

details of the crawling session

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

Defined in: main.ts:173095

items array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items`](../interfaces/IOnPageContentParsingResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:173093

number of items in the results array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173108

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173132

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

Defined in: main.ts:173125

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)
