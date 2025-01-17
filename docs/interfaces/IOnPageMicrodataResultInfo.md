[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageMicrodataResultInfo

# Interface: IOnPageMicrodataResultInfo

Defined in: main.ts:172006

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:172009

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:172011

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

Defined in: main.ts:172017

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172015

number of items in the results array

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

Defined in: main.ts:172013

microdata validation test results
