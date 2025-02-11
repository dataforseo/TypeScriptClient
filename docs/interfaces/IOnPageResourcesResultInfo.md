[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageResourcesResultInfo

# Interface: IOnPageResourcesResultInfo

Defined in: main.ts:168292

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:168295

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:168297

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:168303

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168301

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:168299

total number of relevant items crawled
