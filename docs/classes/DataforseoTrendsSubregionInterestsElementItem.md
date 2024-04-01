[Documentation](../README.md) / [Exports](../modules.md) / DataforseoTrendsSubregionInterestsElementItem

# Class: DataforseoTrendsSubregionInterestsElementItem

## Hierarchy

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

  ↳ **`DataforseoTrendsSubregionInterestsElementItem`**

## Implements

- [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoTrendsSubregionInterestsElementItem.md#constructor)

### Properties

- [\_discriminator](DataforseoTrendsSubregionInterestsElementItem.md#_discriminator)
- [interests](DataforseoTrendsSubregionInterestsElementItem.md#interests)
- [interests\_comparison](DataforseoTrendsSubregionInterestsElementItem.md#interests_comparison)
- [keywords](DataforseoTrendsSubregionInterestsElementItem.md#keywords)
- [position](DataforseoTrendsSubregionInterestsElementItem.md#position)

### Methods

- [init](DataforseoTrendsSubregionInterestsElementItem.md#init)
- [toJSON](DataforseoTrendsSubregionInterestsElementItem.md#tojson)
- [fromJS](DataforseoTrendsSubregionInterestsElementItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoTrendsSubregionInterestsElementItem**(`data?`): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md) |

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[constructor](BaseDataforseoTrendsItem.md#constructor)

#### Defined in

main.ts:125741

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[_discriminator](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:20906

___

### interests

• `Optional` **interests**: [`Interests`](Interests.md)[]

subregional keyword popuarity data for each specified term

#### Implementation of

[IDataforseoTrendsSubregionInterestsElementItem](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[interests](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests)

#### Defined in

main.ts:125734

___

### interests\_comparison

• `Optional` **interests\_comparison**: [`InterestsComparison`](InterestsComparison.md)

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Implementation of

[IDataforseoTrendsSubregionInterestsElementItem](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[interests_comparison](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests_comparison)

#### Defined in

main.ts:125737

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Implementation of

[IDataforseoTrendsSubregionInterestsElementItem](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[keywords](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#keywords)

#### Defined in

main.ts:125732

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IDataforseoTrendsSubregionInterestsElementItem](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[position](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#position)

#### Defined in

main.ts:125729

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

main.ts:125746

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

main.ts:125775

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[fromJS](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:125768
