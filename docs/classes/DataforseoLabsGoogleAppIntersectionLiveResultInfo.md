[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#constructor)

### Properties

- [app\_ids](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)
- [items](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppIntersectionLiveResultInfo**(`data?`): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:110110

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[app_ids](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)

#### Defined in

main.ts:110096

___

### items

• `Optional` **items**: [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:110106

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:110104

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:110100

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:110098

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:110094

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:110102

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

main.ts:110119

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

main.ts:110152

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:110145
