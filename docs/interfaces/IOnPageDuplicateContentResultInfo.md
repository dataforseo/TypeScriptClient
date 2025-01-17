[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateContentResultInfo

# Interface: IOnPageDuplicateContentResultInfo

Defined in: main.ts:169174

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:169177

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:169179

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageDuplicateContentItem`](../classes/OnPageDuplicateContentItem.md)[]

Defined in: main.ts:169183

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:169181

number of items in the results array
