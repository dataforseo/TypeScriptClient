[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSearchIntentLiveResultInfo

# Class: DataforseoLabsGoogleSearchIntentLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#language_code)

### Methods

- [init](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSearchIntentLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSearchIntentLiveResultInfo**(`data?`): [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Defined in

[main.ts:82933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82933)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResultInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items)

#### Defined in

[main.ts:82929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82929)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResultInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items_count)

#### Defined in

[main.ts:82927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82927)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResultInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#language_code)

#### Defined in

[main.ts:82925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82925)

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

[main.ts:82942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82942)

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

[main.ts:82965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82965)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Defined in

[main.ts:82958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82958)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")