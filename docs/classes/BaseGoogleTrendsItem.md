[Documentation](../README.md) / [Exports](../modules.md) / BaseGoogleTrendsItem

# Class: BaseGoogleTrendsItem

## Hierarchy

- **`BaseGoogleTrendsItem`**

  ↳ [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

  ↳ [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

  ↳ [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

  ↳ [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

## Implements

- [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseGoogleTrendsItem.md#constructor)

### Properties

- [\_discriminator](BaseGoogleTrendsItem.md#_discriminator)

### Methods

- [init](BaseGoogleTrendsItem.md#init)
- [toJSON](BaseGoogleTrendsItem.md#tojson)
- [fromJS](BaseGoogleTrendsItem.md#fromjs)

## Constructors

### constructor

• **new BaseGoogleTrendsItem**(`data?`): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md) |

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Defined in

main.ts:20840

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:20838

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

main.ts:20850

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

main.ts:20886

___

### fromJS

▸ **fromJS**(`data`): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Defined in

main.ts:20859
