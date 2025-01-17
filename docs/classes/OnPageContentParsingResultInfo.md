[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingResultInfo

# Class: OnPageContentParsingResultInfo

Defined in: main.ts:173634

## Implements

- [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingResultInfo()

> **new OnPageContentParsingResultInfo**(`data`?): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

Defined in: main.ts:173647

#### Parameters

##### data?

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:173637

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:173639

details of the crawling session

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

Defined in: main.ts:173643

items array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items`](../interfaces/IOnPageContentParsingResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:173641

number of items in the results array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173656

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173680

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

Defined in: main.ts:173673

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)
