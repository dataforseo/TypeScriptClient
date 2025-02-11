[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPagePagesResultInfo

# Interface: IOnPagePagesResultInfo

Defined in: main.ts:167244

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:167247

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:167249

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:167255

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167253

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:167251

total number of relevant items in the database
