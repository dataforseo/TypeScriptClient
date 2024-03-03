[Documentation](../README.md) / [Exports](../modules.md) / IOnPagePagesResultInfo

# Interface: IOnPagePagesResultInfo

## Implemented by

- [`OnPagePagesResultInfo`](../classes/OnPagePagesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPagePagesResultInfo.md#crawl_progress)
- [crawl\_status](IOnPagePagesResultInfo.md#crawl_status)
- [items](IOnPagePagesResultInfo.md#items)
- [items\_count](IOnPagePagesResultInfo.md#items_count)
- [total\_items\_count](IOnPagePagesResultInfo.md#total_items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:145350

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:145352

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

main.ts:145358

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:145356

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:145354
