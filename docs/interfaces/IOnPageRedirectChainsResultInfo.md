[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsResultInfo

# Interface: IOnPageRedirectChainsResultInfo

Defined in: main.ts:170350

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:170353

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:170355

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageRedirectChainsItem`](../classes/OnPageRedirectChainsItem.md)[]

Defined in: main.ts:170361

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170359

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:170357

total number of relevant items in the database
