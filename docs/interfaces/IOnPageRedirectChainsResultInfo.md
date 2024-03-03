[Documentation](../README.md) / [Exports](../modules.md) / IOnPageRedirectChainsResultInfo

# Interface: IOnPageRedirectChainsResultInfo

## Implemented by

- [`OnPageRedirectChainsResultInfo`](../classes/OnPageRedirectChainsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageRedirectChainsResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageRedirectChainsResultInfo.md#crawl_status)
- [items](IOnPageRedirectChainsResultInfo.md#items)
- [items\_count](IOnPageRedirectChainsResultInfo.md#items_count)
- [total\_items\_count](IOnPageRedirectChainsResultInfo.md#total_items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:149274

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:149276

___

### items

• `Optional` **items**: [`OnPageRedirectChainsItem`](../classes/OnPageRedirectChainsItem.md)[]

items array

#### Defined in

main.ts:149282

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:149280

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:149278
