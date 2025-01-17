[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageWaterfallResultInfo

# Interface: IOnPageWaterfallResultInfo

Defined in: main.ts:170974

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:170977

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:170979

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageWaterfallItem`](../classes/OnPageWaterfallItem.md)[]

Defined in: main.ts:170983

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170981

number of items in the results array
