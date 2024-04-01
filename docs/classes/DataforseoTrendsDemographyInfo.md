[Documentation](../README.md) / [Exports](../modules.md) / DataforseoTrendsDemographyInfo

# Class: DataforseoTrendsDemographyInfo

## Implements

- [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoTrendsDemographyInfo.md#constructor)

### Properties

- [demography](DataforseoTrendsDemographyInfo.md#demography)
- [demography\_comparison](DataforseoTrendsDemographyInfo.md#demography_comparison)
- [keywords](DataforseoTrendsDemographyInfo.md#keywords)
- [position](DataforseoTrendsDemographyInfo.md#position)
- [type](DataforseoTrendsDemographyInfo.md#type)

### Methods

- [init](DataforseoTrendsDemographyInfo.md#init)
- [toJSON](DataforseoTrendsDemographyInfo.md#tojson)
- [fromJS](DataforseoTrendsDemographyInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoTrendsDemographyInfo**(`data?`): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md) |

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Defined in

main.ts:126513

## Properties

### demography

• `Optional` **demography**: [`Demography`](Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[IDataforseoTrendsDemographyInfo](../interfaces/IDataforseoTrendsDemographyInfo.md).[demography](../interfaces/IDataforseoTrendsDemographyInfo.md#demography)

#### Defined in

main.ts:126505

___

### demography\_comparison

• `Optional` **demography\_comparison**: [`DemographyComparison`](DemographyComparison.md)

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[IDataforseoTrendsDemographyInfo](../interfaces/IDataforseoTrendsDemographyInfo.md).[demography_comparison](../interfaces/IDataforseoTrendsDemographyInfo.md#demography_comparison)

#### Defined in

main.ts:126509

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Implementation of

[IDataforseoTrendsDemographyInfo](../interfaces/IDataforseoTrendsDemographyInfo.md).[keywords](../interfaces/IDataforseoTrendsDemographyInfo.md#keywords)

#### Defined in

main.ts:126502

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IDataforseoTrendsDemographyInfo](../interfaces/IDataforseoTrendsDemographyInfo.md).[position](../interfaces/IDataforseoTrendsDemographyInfo.md#position)

#### Defined in

main.ts:126497

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDataforseoTrendsDemographyInfo](../interfaces/IDataforseoTrendsDemographyInfo.md).[type](../interfaces/IDataforseoTrendsDemographyInfo.md#type)

#### Defined in

main.ts:126499

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:126522

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:126547

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Defined in

main.ts:126540
