[Documentation](../README.md) / [Exports](../modules.md) / AppMetricsInfo

# Class: AppMetricsInfo

## Implements

- [`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppMetricsInfo.md#constructor)

### Properties

- [count](AppMetricsInfo.md#count)
- [pos\_1](AppMetricsInfo.md#pos_1)
- [pos\_11\_100](AppMetricsInfo.md#pos_11_100)
- [pos\_2\_3](AppMetricsInfo.md#pos_2_3)
- [pos\_4\_10](AppMetricsInfo.md#pos_4_10)
- [search\_volume](AppMetricsInfo.md#search_volume)

### Methods

- [init](AppMetricsInfo.md#init)
- [toJSON](AppMetricsInfo.md#tojson)
- [fromJS](AppMetricsInfo.md#fromjs)

## Constructors

### constructor

• **new AppMetricsInfo**(`data?`): [`AppMetricsInfo`](AppMetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md) |

#### Returns

[`AppMetricsInfo`](AppMetricsInfo.md)

#### Defined in

main.ts:100728

## Properties

### count

• `Optional` **count**: `number`

total count of Amazon organic SERPs that contain the product

#### Implementation of

[IAppMetricsInfo](../interfaces/IAppMetricsInfo.md).[count](../interfaces/IAppMetricsInfo.md#count)

#### Defined in

main.ts:100722

___

### pos\_1

• `Optional` **pos\_1**: `number`

number of organic SERPs where the product ranks #1

#### Implementation of

[IAppMetricsInfo](../interfaces/IAppMetricsInfo.md).[pos_1](../interfaces/IAppMetricsInfo.md#pos_1)

#### Defined in

main.ts:100714

___

### pos\_11\_100

• `Optional` **pos\_11\_100**: `number`

number of organic SERPs where the product ranks #11-100

#### Implementation of

[IAppMetricsInfo](../interfaces/IAppMetricsInfo.md).[pos_11_100](../interfaces/IAppMetricsInfo.md#pos_11_100)

#### Defined in

main.ts:100720

___

### pos\_2\_3

• `Optional` **pos\_2\_3**: `number`

number of organic SERPs where the product ranks #2-3

#### Implementation of

[IAppMetricsInfo](../interfaces/IAppMetricsInfo.md).[pos_2_3](../interfaces/IAppMetricsInfo.md#pos_2_3)

#### Defined in

main.ts:100716

___

### pos\_4\_10

• `Optional` **pos\_4\_10**: `number`

number of organic SERPs where the product ranks #4-10

#### Implementation of

[IAppMetricsInfo](../interfaces/IAppMetricsInfo.md).[pos_4_10](../interfaces/IAppMetricsInfo.md#pos_4_10)

#### Defined in

main.ts:100718

___

### search\_volume

• `Optional` **search\_volume**: `number`

total search volume of the product’s ranking keywords in organic SERP

#### Implementation of

[IAppMetricsInfo](../interfaces/IAppMetricsInfo.md).[search_volume](../interfaces/IAppMetricsInfo.md#search_volume)

#### Defined in

main.ts:100724

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

main.ts:100737

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

main.ts:100759

___

### fromJS

▸ **fromJS**(`data`): [`AppMetricsInfo`](AppMetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppMetricsInfo`](AppMetricsInfo.md)

#### Defined in

main.ts:100752
