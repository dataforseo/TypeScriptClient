[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppIntersectionLiveResultInfo

# Class: DataforseoLabsAppleAppIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#constructor)

### Properties

- [app\_ids](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#app_ids)
- [items](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppIntersectionLiveResultInfo**(`data?`): [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:114397

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[app_ids](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#app_ids)

#### Defined in

main.ts:114383

___

### items

• `Optional` **items**: [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:114393

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:114391

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:114387

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:114385

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:114381

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:114389

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

main.ts:114406

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

main.ts:114439

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:114432
