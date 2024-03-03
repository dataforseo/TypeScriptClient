[Documentation](../README.md) / [Exports](../modules.md) / IGoogleTrendsQueriesListElementItem

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

main.ts:121340

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_queries_list element is based on the keywords listed in this array

#### Defined in

main.ts:121338

___

### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:121333

___

### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Defined in

main.ts:121335
