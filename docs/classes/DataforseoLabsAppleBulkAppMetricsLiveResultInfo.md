[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResultInfo

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleBulkAppMetricsLiveResultInfo**(`data?`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Defined in

main.ts:112723

## Properties

### items

• `Optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

contains data related to the ranking app metrics of the specified application

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)

#### Defined in

main.ts:112719

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)

#### Defined in

main.ts:112717

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)

#### Defined in

main.ts:112713

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)

#### Defined in

main.ts:112711

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)

#### Defined in

main.ts:112709

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

#### Defined in

main.ts:112715

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

main.ts:112732

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

main.ts:112758

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Defined in

main.ts:112751
