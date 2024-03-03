[Documentation](../README.md) / [Exports](../modules.md) / ICrawlStatusInfo

# Interface: ICrawlStatusInfo

## Implemented by

- [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [max\_crawl\_pages](ICrawlStatusInfo.md#max_crawl_pages)
- [pages\_crawled](ICrawlStatusInfo.md#pages_crawled)
- [pages\_in\_queue](ICrawlStatusInfo.md#pages_in_queue)

## Properties

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

maximum number of pages to crawl
indicates the max_crawl_pages limit you specified when setting a task

#### Defined in

main.ts:20972

___

### pages\_crawled

• `Optional` **pages\_crawled**: `number`

number of crawled pages

#### Defined in

main.ts:20976

___

### pages\_in\_queue

• `Optional` **pages\_in\_queue**: `number`

number of pages that are currently in the crawling queue

#### Defined in

main.ts:20974
