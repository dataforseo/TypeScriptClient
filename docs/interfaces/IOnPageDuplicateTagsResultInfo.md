[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateTagsResultInfo

# Interface: IOnPageDuplicateTagsResultInfo

Defined in: main.ts:168726

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:168729

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:168731

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageDuplicateTagsItem`](../classes/OnPageDuplicateTagsItem.md)[]

Defined in: main.ts:168741

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168739

number of items in the results array

***

### pages\_count?

> `optional` **pages\_count**: `number`

Defined in: main.ts:168737

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

***

### total\_pages\_count?

> `optional` **total\_pages\_count**: `number`

Defined in: main.ts:168734

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website
