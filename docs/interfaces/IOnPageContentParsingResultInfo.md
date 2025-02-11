[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingResultInfo

# Interface: IOnPageContentParsingResultInfo

Defined in: main.ts:173150

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:173153

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:173155

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

Defined in: main.ts:173159

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:173157

number of items in the results array
