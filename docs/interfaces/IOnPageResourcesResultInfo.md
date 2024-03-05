[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageResourcesResultInfo

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

[main.ts:146554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146554)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:146556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146556)

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

[main.ts:146562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146562)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:146560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146560)

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items crawled

#### Defined in

[main.ts:146558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146558)
