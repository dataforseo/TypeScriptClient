[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPagePagesResultInfo

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

[main.ts:145206](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145206)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:145208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145208)

___


### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

[main.ts:145214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145214)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:145212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145212)

___


### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

[main.ts:145210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145210)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")