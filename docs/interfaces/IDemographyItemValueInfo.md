[Documentation](../README.md) / [Exports](../modules.md) / IDemographyItemValueInfo

# Interface: IDemographyItemValueInfo

## Implemented by

- [`DemographyItemValueInfo`](../classes/DemographyItemValueInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [type](IDemographyItemValueInfo.md#type)
- [value](IDemographyItemValueInfo.md#value)

## Properties

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:126267

___

### value

• `Optional` **value**: `number`

keyword popularity rate within the specified age range
using this value you can understand how popular a keyword is within each age range;
calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 0 means there was not enough data for this term

#### Defined in

main.ts:126273
