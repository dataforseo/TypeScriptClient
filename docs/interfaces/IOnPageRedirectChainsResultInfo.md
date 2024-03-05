[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageRedirectChainsResultInfo

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

[main.ts:149130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149130)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:149132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149132)

___

### items

• `Optional` **items**: [`OnPageRedirectChainsItem`](../classes/OnPageRedirectChainsItem.md)[]

items array

#### Defined in

[main.ts:149138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149138)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:149136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149136)

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

[main.ts:149134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149134)
