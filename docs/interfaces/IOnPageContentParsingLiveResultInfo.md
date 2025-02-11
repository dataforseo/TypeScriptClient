[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingLiveResultInfo

# Interface: IOnPageContentParsingLiveResultInfo

Defined in: main.ts:174532

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:174535

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:174537

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageContentParsingLiveItem`](../classes/OnPageContentParsingLiveItem.md)[]

Defined in: main.ts:174541

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:174539

number of items in the results array
