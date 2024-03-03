[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo**(`data?`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:98574

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

main.ts:98570

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

main.ts:98568

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

main.ts:98564

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

main.ts:98561

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

main.ts:98558

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

main.ts:98566

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

main.ts:98583

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

main.ts:98609

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:98602
