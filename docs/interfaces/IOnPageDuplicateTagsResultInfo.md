**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageDuplicateTagsResultInfo

# Interface: IOnPageDuplicateTagsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:158863

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Source

main.ts:158865

***

### items?

> **`optional`** **items**: [`OnPageDuplicateTagsItem`](../classes/OnPageDuplicateTagsItem.md)[]

items array

#### Source

main.ts:158875

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Source

main.ts:158873

***

### pages\_count?

> **`optional`** **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Source

main.ts:158871

***

### total\_pages\_count?

> **`optional`** **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Source

main.ts:158868
