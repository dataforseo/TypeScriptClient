[Documentation](../README.md) / [Exports](../modules.md) / IGoogleTrendsGraphElementItem

# Interface: IGoogleTrendsGraphElementItem

## Hierarchy

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

  ↳ **`IGoogleTrendsGraphElementItem`**

## Implemented by

- [`GoogleTrendsGraphElementItem`](../classes/GoogleTrendsGraphElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [averages](IGoogleTrendsGraphElementItem.md#averages)
- [data](IGoogleTrendsGraphElementItem.md#data)
- [keywords](IGoogleTrendsGraphElementItem.md#keywords)
- [position](IGoogleTrendsGraphElementItem.md#position)
- [title](IGoogleTrendsGraphElementItem.md#title)

## Properties

### averages

• `Optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Defined in

main.ts:122951

___

### data

• `Optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Defined in

main.ts:122949

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Defined in

main.ts:122947

___

### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:122942

___

### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Defined in

main.ts:122944
