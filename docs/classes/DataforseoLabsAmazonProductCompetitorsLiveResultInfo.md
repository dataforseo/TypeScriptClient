[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#constructor)

### Properties

- [asin](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#asin)
- [items](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductCompetitorsLiveResultInfo**(`data?`): [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:101476

## Properties

### asin

• `Optional` **asin**: `string`

ASIN in a POST array

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[asin](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#asin)

#### Defined in

main.ts:101460

___

### items

• `Optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:101472

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:101470

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#language_code)

#### Defined in

main.ts:101466

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#location_code)

#### Defined in

main.ts:101463

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#se_type)

#### Defined in

main.ts:101458

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:101468

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

main.ts:101485

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

main.ts:101512

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:101505
