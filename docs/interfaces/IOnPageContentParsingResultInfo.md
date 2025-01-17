[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingResultInfo

# Interface: IOnPageContentParsingResultInfo

Defined in: main.ts:173698

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:173701

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:173703

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

Defined in: main.ts:173707

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:173705

number of items in the results array
