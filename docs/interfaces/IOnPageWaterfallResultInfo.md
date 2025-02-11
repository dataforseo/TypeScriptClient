[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageWaterfallResultInfo

# Interface: IOnPageWaterfallResultInfo

Defined in: main.ts:171138

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:171141

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:171143

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](../classes/OnPageWaterfallItem.md)[]

Defined in: main.ts:171147

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:171145

number of items in the results array
