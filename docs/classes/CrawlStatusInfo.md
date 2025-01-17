[**Documentation**](../README.md)

***

[Documentation](../README.md) / CrawlStatusInfo

# Class: CrawlStatusInfo

Defined in: main.ts:23387

## Implements

- [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CrawlStatusInfo()

> **new CrawlStatusInfo**(`data`?): [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:23398

#### Parameters

##### data?

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

## Properties

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:23390

maximum number of pages to crawl
indicates the max_crawl_pages limit you specified when setting a task

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`max_crawl_pages`](../interfaces/ICrawlStatusInfo.md#max_crawl_pages)

***

### pages\_crawled?

> `optional` **pages\_crawled**: `number`

Defined in: main.ts:23394

number of crawled pages

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_crawled`](../interfaces/ICrawlStatusInfo.md#pages_crawled)

***

### pages\_in\_queue?

> `optional` **pages\_in\_queue**: `number`

Defined in: main.ts:23392

number of pages that are currently in the crawling queue

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_in_queue`](../interfaces/ICrawlStatusInfo.md#pages_in_queue)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23407

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23426

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:23419

#### Parameters

##### data

`any`

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)
