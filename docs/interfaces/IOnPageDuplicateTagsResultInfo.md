[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateTagsResultInfo

# Interface: IOnPageDuplicateTagsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:168661

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:168663

***

### items?

> `optional` **items**: [`OnPageDuplicateTagsItem`](../classes/OnPageDuplicateTagsItem.md)[]

items array

#### Defined in

main.ts:168673

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:168671

***

### pages\_count?

> `optional` **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Defined in

main.ts:168669

***

### total\_pages\_count?

> `optional` **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Defined in

main.ts:168666
