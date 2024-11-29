[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateContentResultInfo

# Interface: IOnPageDuplicateContentResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:169109

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:169111

***

### items?

> `optional` **items**: [`OnPageDuplicateContentItem`](../classes/OnPageDuplicateContentItem.md)[]

items array

#### Defined in

main.ts:169115

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:169113
