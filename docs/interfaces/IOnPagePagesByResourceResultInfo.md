[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPagePagesByResourceResultInfo

# Interface: IOnPagePagesByResourceResultInfo

Defined in: main.ts:167624

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:167627

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:167629

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:167635

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167633

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:167631

total number of relevant items in the database
