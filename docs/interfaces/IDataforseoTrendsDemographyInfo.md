[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoTrendsDemographyInfo

# Interface: IDataforseoTrendsDemographyInfo

## Implemented by

- [`DataforseoTrendsDemographyInfo`](../classes/DataforseoTrendsDemographyInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [demography](IDataforseoTrendsDemographyInfo.md#demography)
- [demography\_comparison](IDataforseoTrendsDemographyInfo.md#demography_comparison)
- [keywords](IDataforseoTrendsDemographyInfo.md#keywords)
- [position](IDataforseoTrendsDemographyInfo.md#position)
- [type](IDataforseoTrendsDemographyInfo.md#type)

## Properties

### demography

• `Optional` **demography**: [`Demography`](../classes/Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Defined in

main.ts:126577

___

### demography\_comparison

• `Optional` **demography\_comparison**: [`DemographyComparison`](../classes/DemographyComparison.md)

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Defined in

main.ts:126581

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Defined in

main.ts:126574

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:126569

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:126571
