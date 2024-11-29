[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageWaterfallResultInfo

# Interface: IOnPageWaterfallResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:170909

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:170911

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](../classes/OnPageWaterfallItem.md)[]

items array

#### Defined in

main.ts:170915

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:170913
