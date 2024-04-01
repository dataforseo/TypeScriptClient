[Documentation](../README.md) / [Exports](../modules.md) / DataforseoTrendsDataInfo

# Class: DataforseoTrendsDataInfo

## Implements

- [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoTrendsDataInfo.md#constructor)

### Properties

- [keyword](DataforseoTrendsDataInfo.md#keyword)
- [values](DataforseoTrendsDataInfo.md#values)

### Methods

- [init](DataforseoTrendsDataInfo.md#init)
- [toJSON](DataforseoTrendsDataInfo.md#tojson)
- [fromJS](DataforseoTrendsDataInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoTrendsDataInfo**(`data?`): [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md) |

#### Returns

[`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Defined in

main.ts:126286

## Properties

### keyword

• `Optional` **keyword**: `string`

relevant keyword for which demographic data is provided

#### Implementation of

[IDataforseoTrendsDataInfo](../interfaces/IDataforseoTrendsDataInfo.md).[keyword](../interfaces/IDataforseoTrendsDataInfo.md#keyword)

#### Defined in

main.ts:126280

___

### values

• `Optional` **values**: [`DemographyItemValueInfo`](DemographyItemValueInfo.md)[]

contains age range and corresponding keyword popularity values

#### Implementation of

[IDataforseoTrendsDataInfo](../interfaces/IDataforseoTrendsDataInfo.md).[values](../interfaces/IDataforseoTrendsDataInfo.md#values)

#### Defined in

main.ts:126282

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

main.ts:126295

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

main.ts:126317

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Defined in

main.ts:126310
