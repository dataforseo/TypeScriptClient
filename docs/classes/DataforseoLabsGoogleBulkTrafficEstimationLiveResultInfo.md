[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo**(`data?`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:100159

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

main.ts:100155

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

main.ts:100153

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

main.ts:100149

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

main.ts:100146

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

main.ts:100143

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

main.ts:100151

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

main.ts:100168

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

main.ts:100194

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:100187
