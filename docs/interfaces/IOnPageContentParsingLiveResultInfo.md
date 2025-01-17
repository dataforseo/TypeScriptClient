[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingLiveResultInfo

# Interface: IOnPageContentParsingLiveResultInfo

Defined in: main.ts:174168

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:174171

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:174173

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

Defined in: main.ts:174177

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:174175

number of items in the results array
