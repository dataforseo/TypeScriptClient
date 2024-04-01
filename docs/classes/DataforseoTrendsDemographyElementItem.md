[Documentation](../README.md) / [Exports](../modules.md) / DataforseoTrendsDemographyElementItem

# Class: DataforseoTrendsDemographyElementItem

## Hierarchy

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

  ↳ **`DataforseoTrendsDemographyElementItem`**

## Implements

- [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoTrendsDemographyElementItem.md#constructor)

### Properties

- [\_discriminator](DataforseoTrendsDemographyElementItem.md#_discriminator)
- [demography](DataforseoTrendsDemographyElementItem.md#demography)
- [demography\_comparison](DataforseoTrendsDemographyElementItem.md#demography_comparison)
- [keywords](DataforseoTrendsDemographyElementItem.md#keywords)
- [position](DataforseoTrendsDemographyElementItem.md#position)

### Methods

- [init](DataforseoTrendsDemographyElementItem.md#init)
- [toJSON](DataforseoTrendsDemographyElementItem.md#tojson)
- [fromJS](DataforseoTrendsDemographyElementItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoTrendsDemographyElementItem**(`data?`): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md) |

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[constructor](BaseDataforseoTrendsItem.md#constructor)

#### Defined in

main.ts:127001

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[_discriminator](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:20906

___

### demography

• `Optional` **demography**: [`Demography`](Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[IDataforseoTrendsDemographyElementItem](../interfaces/IDataforseoTrendsDemographyElementItem.md).[demography](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography)

#### Defined in

main.ts:126993

___

### demography\_comparison

• `Optional` **demography\_comparison**: `any`

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[IDataforseoTrendsDemographyElementItem](../interfaces/IDataforseoTrendsDemographyElementItem.md).[demography_comparison](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography_comparison)

#### Defined in

main.ts:126997

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Implementation of

[IDataforseoTrendsDemographyElementItem](../interfaces/IDataforseoTrendsDemographyElementItem.md).[keywords](../interfaces/IDataforseoTrendsDemographyElementItem.md#keywords)

#### Defined in

main.ts:126990

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IDataforseoTrendsDemographyElementItem](../interfaces/IDataforseoTrendsDemographyElementItem.md).[position](../interfaces/IDataforseoTrendsDemographyElementItem.md#position)

#### Defined in

main.ts:126987

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[init](BaseDataforseoTrendsItem.md#init)

#### Defined in

main.ts:127006

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[toJSON](BaseDataforseoTrendsItem.md#tojson)

#### Defined in

main.ts:127031

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[fromJS](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:127024
