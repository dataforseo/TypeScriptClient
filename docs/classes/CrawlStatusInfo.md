[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / CrawlStatusInfo

# Class: CrawlStatusInfo

## Implements

- [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CrawlStatusInfo()

> **new CrawlStatusInfo**(`data`?): [`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Parameters

• **data?**: [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Defined in

main.ts:22179

## Properties

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

maximum number of pages to crawl
indicates the max_crawl_pages limit you specified when setting a task

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`max_crawl_pages`](../interfaces/ICrawlStatusInfo.md#max_crawl_pages)

#### Defined in

main.ts:22171

***

### pages\_crawled?

> `optional` **pages\_crawled**: `number`

number of crawled pages

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_crawled`](../interfaces/ICrawlStatusInfo.md#pages_crawled)

#### Defined in

main.ts:22175

***

### pages\_in\_queue?

> `optional` **pages\_in\_queue**: `number`

number of pages that are currently in the crawling queue

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_in_queue`](../interfaces/ICrawlStatusInfo.md#pages_in_queue)

#### Defined in

main.ts:22173

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22188

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22207

***

### fromJS()

> `static` **fromJS**(`data`): [`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Defined in

main.ts:22200
