[Documentation](../README.md) / [Exports](../modules.md) / BaseDataforseoTrendsItem

# Class: BaseDataforseoTrendsItem

## Hierarchy

- **`BaseDataforseoTrendsItem`**

  ↳ [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

  ↳ [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

  ↳ [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

## Implements

- [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseDataforseoTrendsItem.md#constructor)

### Properties

- [\_discriminator](BaseDataforseoTrendsItem.md#_discriminator)

### Methods

- [init](BaseDataforseoTrendsItem.md#init)
- [toJSON](BaseDataforseoTrendsItem.md#tojson)
- [fromJS](BaseDataforseoTrendsItem.md#fromjs)

## Constructors

### constructor

• **new BaseDataforseoTrendsItem**(`data?`): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md) |

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Defined in

main.ts:20908

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:20906

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

main.ts:20918

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

main.ts:20949

___

### fromJS

▸ **fromJS**(`data`): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Defined in

main.ts:20927
