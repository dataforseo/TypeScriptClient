[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoTrendsGraphElementItem

# Interface: IDataforseoTrendsGraphElementItem

## Hierarchy

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

  ↳ **`IDataforseoTrendsGraphElementItem`**

## Implemented by

- [`DataforseoTrendsGraphElementItem`](../classes/DataforseoTrendsGraphElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [averages](IDataforseoTrendsGraphElementItem.md#averages)
- [data](IDataforseoTrendsGraphElementItem.md#data)
- [keywords](IDataforseoTrendsGraphElementItem.md#keywords)
- [position](IDataforseoTrendsGraphElementItem.md#position)

## Properties

### averages

• `Optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Defined in

main.ts:124993

___

### data

• `Optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Defined in

main.ts:124991

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Defined in

main.ts:124989

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:124986
