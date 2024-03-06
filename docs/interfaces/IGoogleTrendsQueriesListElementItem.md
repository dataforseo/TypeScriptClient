[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleTrendsQueriesListElementItem

# Interface: IGoogleTrendsQueriesListElementItem

## Hierarchy

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)
  
  ↳ **`IGoogleTrendsQueriesListElementItem`**

## Implemented by

- [`GoogleTrendsQueriesListElementItem`](../classes/GoogleTrendsQueriesListElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data](IGoogleTrendsQueriesListElementItem.md#data)
- [keywords](IGoogleTrendsQueriesListElementItem.md#keywords)
- [position](IGoogleTrendsQueriesListElementItem.md#position)
- [title](IGoogleTrendsQueriesListElementItem.md#title)

## Properties

### data

• `Optional` **data**: [`QueriesListDataInfo`](../classes/QueriesListDataInfo.md)

Google Trends data from the corresponding item

#### Defined in

[main.ts:121196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121196)

___


### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_queries_list element is based on the keywords listed in this array

#### Defined in

[main.ts:121194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121194)

___


### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

[main.ts:121189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121189)

___


### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Defined in

[main.ts:121191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121191)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")