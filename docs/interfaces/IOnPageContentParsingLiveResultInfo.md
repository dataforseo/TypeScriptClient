[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IOnPageContentParsingLiveResultInfo

# Interface: IOnPageContentParsingLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:166553

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:166555

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

items array

#### Defined in

main.ts:166559

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:166557
