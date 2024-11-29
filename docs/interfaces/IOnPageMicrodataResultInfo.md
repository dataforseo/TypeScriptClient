[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageMicrodataResultInfo

# Interface: IOnPageMicrodataResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:171941

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:171943

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

items array

#### Defined in

main.ts:171949

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:171947

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

microdata validation test results

#### Defined in

main.ts:171945
