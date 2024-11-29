[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageNonIndexableResultInfo

# Interface: IOnPageNonIndexableResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:170497

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:170499

***

### items?

> `optional` **items**: [`OnPageNonIndexableItem`](../classes/OnPageNonIndexableItem.md)[]

items array

#### Defined in

main.ts:170505

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:170503

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:170501
