[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleKeywordsForAppLiveResultInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveResultInfo

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#constructor)

### Properties

- [app\_id](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#app_id)
- [items](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleKeywordsForAppLiveResultInfo**(`data?`): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:113295

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[app_id](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#app_id)

#### Defined in

main.ts:113281

___

### items

• `Optional` **items**: [`DataforseoLabsleKeywordsForAppLiveItem`](DataforseoLabsleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items)

#### Defined in

main.ts:113291

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items_count)

#### Defined in

main.ts:113289

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#language_code)

#### Defined in

main.ts:113285

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#location_code)

#### Defined in

main.ts:113283

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#se_type)

#### Defined in

main.ts:113279

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#total_count)

#### Defined in

main.ts:113287

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

main.ts:113304

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

main.ts:113331

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:113324
