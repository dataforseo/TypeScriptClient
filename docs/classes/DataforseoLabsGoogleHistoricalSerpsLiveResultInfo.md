[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)
- [keyword](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)
- [language\_code](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Defined in

main.ts:92409

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)

#### Defined in

main.ts:92405

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)

#### Defined in

main.ts:92403

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[keyword](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)

#### Defined in

main.ts:92395

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)

#### Defined in

main.ts:92399

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)

#### Defined in

main.ts:92397

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)

#### Defined in

main.ts:92392

___

### total\_count

• `Optional` **total\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

#### Defined in

main.ts:92401

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

main.ts:92418

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

main.ts:92445

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Defined in

main.ts:92438
