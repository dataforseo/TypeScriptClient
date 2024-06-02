**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageMicrodataResultInfo

# Interface: IOnPageMicrodataResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:158306

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Source

main.ts:158308

***

### items?

> **`optional`** **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

items array

#### Source

main.ts:158314

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Source

main.ts:158312

***

### test\_summary?

> **`optional`** **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

microdata validation test results

#### Source

main.ts:158310
