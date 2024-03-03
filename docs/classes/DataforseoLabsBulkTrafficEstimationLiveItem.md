[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBulkTrafficEstimationLiveItem

# Class: DataforseoLabsBulkTrafficEstimationLiveItem

## Implements

- [`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBulkTrafficEstimationLiveItem.md#constructor)

### Properties

- [metrics](DataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)
- [se\_type](DataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)
- [target](DataforseoLabsBulkTrafficEstimationLiveItem.md#target)

### Methods

- [init](DataforseoLabsBulkTrafficEstimationLiveItem.md#init)
- [toJSON](DataforseoLabsBulkTrafficEstimationLiveItem.md#tojson)
- [fromJS](DataforseoLabsBulkTrafficEstimationLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBulkTrafficEstimationLiveItem**(`data?`): [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md) |

#### Returns

[`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:97844

## Properties

### metrics

• `Optional` **metrics**: `Object`

traffic data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[IDataforseoLabsBulkTrafficEstimationLiveItem](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[metrics](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)

#### Defined in

main.ts:97840

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBulkTrafficEstimationLiveItem](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[se_type](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)

#### Defined in

main.ts:97836

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsBulkTrafficEstimationLiveItem](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[target](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#target)

#### Defined in

main.ts:97838

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

main.ts:97853

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

main.ts:97878

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:97871
