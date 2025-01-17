[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPagePagesResultInfo

# Interface: IOnPagePagesResultInfo

Defined in: main.ts:167080

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:167083

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:167085

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:167091

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167089

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:167087

total number of relevant items in the database
