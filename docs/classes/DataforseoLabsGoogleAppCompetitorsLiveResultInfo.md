[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#constructor)

### Properties

- [app\_id](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#app_id)
- [items](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppCompetitorsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:109402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109402)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[app_id](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#app_id)

#### Defined in

[main.ts:109388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109388)

___


### items

• `Optional` **items**: [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items)

#### Defined in

[main.ts:109398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109398)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:109396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109396)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:109392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109392)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:109390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109390)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:109386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109386)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:109394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109394)

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

[main.ts:109411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109411)

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

[main.ts:109438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109438)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:109431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109431)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")