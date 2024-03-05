[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPagePagesByResourceResultInfo

# Interface: IOnPagePagesByResourceResultInfo

## Implemented by

- [`OnPagePagesByResourceResultInfo`](../classes/OnPagePagesByResourceResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPagePagesByResourceResultInfo.md#crawl_progress)
- [crawl\_status](IOnPagePagesByResourceResultInfo.md#crawl_status)
- [items](IOnPagePagesByResourceResultInfo.md#items)
- [items\_count](IOnPagePagesByResourceResultInfo.md#items_count)
- [total\_items\_count](IOnPagePagesByResourceResultInfo.md#total_items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

[main.ts:145586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145586)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:145588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145588)

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

[main.ts:145594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145594)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:145592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145592)

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

[main.ts:145590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145590)
