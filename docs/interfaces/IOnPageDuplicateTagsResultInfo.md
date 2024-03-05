[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageDuplicateTagsResultInfo

# Interface: IOnPageDuplicateTagsResultInfo

## Implemented by

- [`OnPageDuplicateTagsResultInfo`](../classes/OnPageDuplicateTagsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageDuplicateTagsResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageDuplicateTagsResultInfo.md#crawl_status)
- [items](IOnPageDuplicateTagsResultInfo.md#items)
- [items\_count](IOnPageDuplicateTagsResultInfo.md#items_count)
- [pages\_count](IOnPageDuplicateTagsResultInfo.md#pages_count)
- [total\_pages\_count](IOnPageDuplicateTagsResultInfo.md#total_pages_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

[main.ts:147302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147302)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:147304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147304)

___

### items

• `Optional` **items**: [`OnPageDuplicateTagsItem`](../classes/OnPageDuplicateTagsItem.md)[]

items array

#### Defined in

[main.ts:147314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147314)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:147312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147312)

___

### pages\_count

• `Optional` **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Defined in

[main.ts:147310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147310)

___

### total\_pages\_count

• `Optional` **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Defined in

[main.ts:147307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147307)
