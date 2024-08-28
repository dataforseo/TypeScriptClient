[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IOnPageRawHtmlResultInfo

# Interface: IOnPageRawHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:164637

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:164639

***

### items?

> `optional` **items**: [`OnPageRawHtmlItem`](../classes/OnPageRawHtmlItem.md)

items array

#### Defined in

main.ts:164643

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:164641
