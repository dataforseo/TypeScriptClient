[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRawHtmlResultInfo

# Interface: IOnPageRawHtmlResultInfo

Defined in: main.ts:172308

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:172311

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:172313

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageRawHtmlItem`](../classes/OnPageRawHtmlItem.md)

Defined in: main.ts:172317

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172315

number of items in the results array
