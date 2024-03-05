[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppIntersectionLiveResultInfo

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

[main.ts:109966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109966)

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[app_ids](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)

#### Defined in

[main.ts:109952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109952)

___

### items

• `Optional` **items**: [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)

#### Defined in

[main.ts:109962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109962)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)

#### Defined in

[main.ts:109960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109960)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)

#### Defined in

[main.ts:109956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109956)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)

#### Defined in

[main.ts:109954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109954)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)

#### Defined in

[main.ts:109950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109950)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

#### Defined in

[main.ts:109958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109958)

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

[main.ts:109975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109975)

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

[main.ts:110008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110008)

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

[main.ts:110001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110001)
