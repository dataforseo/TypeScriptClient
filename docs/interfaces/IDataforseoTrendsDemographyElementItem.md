[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoTrendsDemographyElementItem

# Interface: IDataforseoTrendsDemographyElementItem

## Hierarchy

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

  ↳ **`IDataforseoTrendsDemographyElementItem`**

## Implemented by

- [`DataforseoTrendsDemographyElementItem`](../classes/DataforseoTrendsDemographyElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [demography](IDataforseoTrendsDemographyElementItem.md#demography)
- [demography\_comparison](IDataforseoTrendsDemographyElementItem.md#demography_comparison)
- [keywords](IDataforseoTrendsDemographyElementItem.md#keywords)
- [position](IDataforseoTrendsDemographyElementItem.md#position)

## Properties

### demography

• `Optional` **demography**: [`Demography`](../classes/Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Defined in

main.ts:127059

___

### demography\_comparison

• `Optional` **demography\_comparison**: `any`

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Defined in

main.ts:127063

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Defined in

main.ts:127056

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:127053
