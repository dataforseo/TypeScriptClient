[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#se_type)

### Methods

- [init](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo**(`data?`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:84413

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)[]

contains keywords and related data

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items)

#### Defined in

main.ts:84409

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items_count)

#### Defined in

main.ts:84407

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:84405

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:84403

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#se_type)

#### Defined in

main.ts:84401

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

main.ts:84422

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

main.ts:84447

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:84440
