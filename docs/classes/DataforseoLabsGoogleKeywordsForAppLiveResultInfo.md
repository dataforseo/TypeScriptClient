[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForAppLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#constructor)

### Properties

- [app\_id](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#app_id)
- [items](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForAppLiveResultInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:108930

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[app_id](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#app_id)

#### Defined in

main.ts:108916

___

### items

• `Optional` **items**: [`DataforseoLabsleKeywordsForAppLiveItem`](DataforseoLabsleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items)

#### Defined in

main.ts:108926

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items_count)

#### Defined in

main.ts:108924

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#language_code)

#### Defined in

main.ts:108920

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#location_code)

#### Defined in

main.ts:108918

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#se_type)

#### Defined in

main.ts:108914

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#total_count)

#### Defined in

main.ts:108922

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

main.ts:108939

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

main.ts:108966

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:108959
