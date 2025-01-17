[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageResourcesResultInfo

# Interface: IOnPageResourcesResultInfo

Defined in: main.ts:168200

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:168203

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:168205

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:168211

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168209

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:168207

total number of relevant items crawled
