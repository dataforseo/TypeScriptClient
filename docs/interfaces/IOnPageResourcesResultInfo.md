[Documentation](../README.md) / [Exports](../modules.md) / IOnPageResourcesResultInfo

# Interface: IOnPageResourcesResultInfo

## Implemented by

- [`OnPageResourcesResultInfo`](../classes/OnPageResourcesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageResourcesResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageResourcesResultInfo.md#crawl_status)
- [items](IOnPageResourcesResultInfo.md#items)
- [items\_count](IOnPageResourcesResultInfo.md#items_count)
- [total\_items\_count](IOnPageResourcesResultInfo.md#total_items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:146512

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:146514

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

main.ts:146520

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:146518

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items crawled

#### Defined in

main.ts:146516
