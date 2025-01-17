[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageLinksResultInfo

# Interface: IOnPageLinksResultInfo

Defined in: main.ts:169606

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:169609

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:169611

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:169617

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:169615

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:169613

total number of relevant items in the database
