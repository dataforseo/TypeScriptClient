[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoTrendsSubregionInterestsElementItem

# Interface: IDataforseoTrendsSubregionInterestsElementItem

## Hierarchy

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

  ↳ **`IDataforseoTrendsSubregionInterestsElementItem`**

## Implemented by

- [`DataforseoTrendsSubregionInterestsElementItem`](../classes/DataforseoTrendsSubregionInterestsElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [interests](IDataforseoTrendsSubregionInterestsElementItem.md#interests)
- [interests\_comparison](IDataforseoTrendsSubregionInterestsElementItem.md#interests_comparison)
- [keywords](IDataforseoTrendsSubregionInterestsElementItem.md#keywords)
- [position](IDataforseoTrendsSubregionInterestsElementItem.md#position)

## Properties

### interests

• `Optional` **interests**: [`Interests`](../classes/Interests.md)[]

subregional keyword popuarity data for each specified term

#### Defined in

main.ts:125806

___

### interests\_comparison

• `Optional` **interests\_comparison**: [`InterestsComparison`](../classes/InterestsComparison.md)

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Defined in

main.ts:125809

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Defined in

main.ts:125804

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:125801
