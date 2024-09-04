[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageMicrodataResultInfo

# Interface: IOnPageMicrodataResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:164335

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:164337

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

items array

#### Defined in

main.ts:164343

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:164341

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

microdata validation test results

#### Defined in

main.ts:164339
