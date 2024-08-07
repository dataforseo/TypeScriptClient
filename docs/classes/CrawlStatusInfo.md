**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CrawlStatusInfo

# Class: CrawlStatusInfo

## Implements

- [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CrawlStatusInfo(data)

> **new CrawlStatusInfo**(`data`?): [`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Parameters

• **data?**: [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Source

main.ts:21997

## Properties

### max\_crawl\_pages?

> **`optional`** **max\_crawl\_pages**: `number`

maximum number of pages to crawl
indicates the max_crawl_pages limit you specified when setting a task

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`max_crawl_pages`](../interfaces/ICrawlStatusInfo.md#max_crawl_pages)

#### Source

main.ts:21989

***

### pages\_crawled?

> **`optional`** **pages\_crawled**: `number`

number of crawled pages

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_crawled`](../interfaces/ICrawlStatusInfo.md#pages_crawled)

#### Source

main.ts:21993

***

### pages\_in\_queue?

> **`optional`** **pages\_in\_queue**: `number`

number of pages that are currently in the crawling queue

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_in_queue`](../interfaces/ICrawlStatusInfo.md#pages_in_queue)

#### Source

main.ts:21991

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22006

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22025

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Source

main.ts:22018
