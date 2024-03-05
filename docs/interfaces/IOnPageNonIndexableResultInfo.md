[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageNonIndexableResultInfo

# Interface: IOnPageNonIndexableResultInfo

## Implemented by

- [`OnPageNonIndexableResultInfo`](../classes/OnPageNonIndexableResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageNonIndexableResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageNonIndexableResultInfo.md#crawl_status)
- [items](IOnPageNonIndexableResultInfo.md#items)
- [items\_count](IOnPageNonIndexableResultInfo.md#items_count)
- [total\_items\_count](IOnPageNonIndexableResultInfo.md#total_items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

[main.ts:149506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149506)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:149508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149508)

___

### items

• `Optional` **items**: [`OnPageNonIndexableItem`](../classes/OnPageNonIndexableItem.md)[]

items array

#### Defined in

[main.ts:149514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149514)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:149512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149512)

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

[main.ts:149510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149510)
