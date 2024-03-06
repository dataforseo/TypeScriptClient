[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListingsSearchLiveResultInfo

# Class: AppDataAppleAppListingsSearchLiveResultInfo

## Implements

- [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListingsSearchLiveResultInfo.md#constructor)

### Properties

- [count](AppDataAppleAppListingsSearchLiveResultInfo.md#count)
- [items](AppDataAppleAppListingsSearchLiveResultInfo.md#items)
- [offset](AppDataAppleAppListingsSearchLiveResultInfo.md#offset)
- [offset\_token](AppDataAppleAppListingsSearchLiveResultInfo.md#offset_token)
- [total\_count](AppDataAppleAppListingsSearchLiveResultInfo.md#total_count)

### Methods

- [init](AppDataAppleAppListingsSearchLiveResultInfo.md#init)
- [toJSON](AppDataAppleAppListingsSearchLiveResultInfo.md#tojson)
- [fromJS](AppDataAppleAppListingsSearchLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListingsSearchLiveResultInfo**(`data?`): [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md) |

#### Returns

[`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Defined in

[main.ts:186963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186963)

## Properties

### count

• `Optional` **count**: `number`

the number of items in the results array

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResultInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[count](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#count)

#### Defined in

[main.ts:186952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186952)

___


### items

• `Optional` **items**: [`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResultInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[items](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#items)

#### Defined in

[main.ts:186959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186959)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResultInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[offset](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset)

#### Defined in

[main.ts:186954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186954)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResultInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[offset_token](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:186957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186957)

___


### total\_count

• `Optional` **total\_count**: `number`

the total number of relevant results in the database

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResultInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[total_count](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#total_count)

#### Defined in

[main.ts:186950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186950)

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

[main.ts:186972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186972)

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

[main.ts:186997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186997)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Defined in

[main.ts:186990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186990)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")