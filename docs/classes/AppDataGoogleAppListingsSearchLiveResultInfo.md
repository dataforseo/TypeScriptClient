[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListingsSearchLiveResultInfo

# Class: AppDataGoogleAppListingsSearchLiveResultInfo

## Implements

- [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListingsSearchLiveResultInfo.md#constructor)

### Properties

- [count](AppDataGoogleAppListingsSearchLiveResultInfo.md#count)
- [items](AppDataGoogleAppListingsSearchLiveResultInfo.md#items)
- [offset](AppDataGoogleAppListingsSearchLiveResultInfo.md#offset)
- [offset\_token](AppDataGoogleAppListingsSearchLiveResultInfo.md#offset_token)
- [total\_count](AppDataGoogleAppListingsSearchLiveResultInfo.md#total_count)

### Methods

- [init](AppDataGoogleAppListingsSearchLiveResultInfo.md#init)
- [toJSON](AppDataGoogleAppListingsSearchLiveResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppListingsSearchLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListingsSearchLiveResultInfo**(`data?`): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md) |

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Defined in

[main.ts:182383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182383)

## Properties

### count

• `Optional` **count**: `number`

the number of items in the results array

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveResultInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[count](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#count)

#### Defined in

[main.ts:182372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182372)

___

### items

• `Optional` **items**: [`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveResultInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[items](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#items)

#### Defined in

[main.ts:182379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182379)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveResultInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[offset](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset)

#### Defined in

[main.ts:182374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182374)

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveResultInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[offset_token](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:182377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182377)

___

### total\_count

• `Optional` **total\_count**: `number`

the total number of relevant results in the database

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveResultInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[total_count](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#total_count)

#### Defined in

[main.ts:182370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182370)

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

[main.ts:182392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182392)

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

[main.ts:182417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182417)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Defined in

[main.ts:182410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182410)
