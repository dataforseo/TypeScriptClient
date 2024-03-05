[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBulkTrafficEstimationLiveItem

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

[main.ts:97700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97700)

## Properties

### metrics

• `Optional` **metrics**: `Object`

traffic data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[IDataforseoLabsBulkTrafficEstimationLiveItem](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[metrics](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)

#### Defined in

[main.ts:97696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97696)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBulkTrafficEstimationLiveItem](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[se_type](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)

#### Defined in

[main.ts:97692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97692)

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsBulkTrafficEstimationLiveItem](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[target](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#target)

#### Defined in

[main.ts:97694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97694)

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

[main.ts:97709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97709)

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

[main.ts:97734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97734)

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

[main.ts:97727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97727)
