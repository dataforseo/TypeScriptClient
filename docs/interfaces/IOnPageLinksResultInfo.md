[Documentation](../README.md) / [Exports](../modules.md) / IOnPageLinksResultInfo

# Interface: IOnPageLinksResultInfo

## Implemented by

- [`OnPageLinksResultInfo`](../classes/OnPageLinksResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageLinksResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageLinksResultInfo.md#crawl_status)
- [items](IOnPageLinksResultInfo.md#items)
- [items\_count](IOnPageLinksResultInfo.md#items_count)
- [total\_items\_count](IOnPageLinksResultInfo.md#total_items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:153701

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:153703

___

### items

• `Optional` **items**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

items array

#### Defined in

main.ts:153709

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:153707

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:153705
