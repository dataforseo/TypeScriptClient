[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataleAppListingsSearchLiveItem

# Class: AppDataleAppListingsSearchLiveItem

## Implements

- [`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataleAppListingsSearchLiveItem.md#constructor)

### Properties

- [app\_id](AppDataleAppListingsSearchLiveItem.md#app_id)
- [check\_url](AppDataleAppListingsSearchLiveItem.md#check_url)
- [item](AppDataleAppListingsSearchLiveItem.md#item)
- [language\_code](AppDataleAppListingsSearchLiveItem.md#language_code)
- [location\_code](AppDataleAppListingsSearchLiveItem.md#location_code)
- [se\_domain](AppDataleAppListingsSearchLiveItem.md#se_domain)
- [time\_update](AppDataleAppListingsSearchLiveItem.md#time_update)

### Methods

- [init](AppDataleAppListingsSearchLiveItem.md#init)
- [toJSON](AppDataleAppListingsSearchLiveItem.md#tojson)
- [fromJS](AppDataleAppListingsSearchLiveItem.md#fromjs)

## Constructors

### constructor

• **new AppDataleAppListingsSearchLiveItem**(`data?`): [`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md) |

#### Returns

[`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Defined in

[main.ts:182296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182296)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

ID of the returned app

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[app_id](../interfaces/IAppDataleAppListingsSearchLiveItem.md#app_id)

#### Defined in

[main.ts:182276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182276)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[check_url](../interfaces/IAppDataleAppListingsSearchLiveItem.md#check_url)

#### Defined in

[main.ts:182285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182285)

___


### item

• `Optional` **item**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

detailed information about the app

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[item](../interfaces/IAppDataleAppListingsSearchLiveItem.md#item)

#### Defined in

[main.ts:182292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182292)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[language_code](../interfaces/IAppDataleAppListingsSearchLiveItem.md#language_code)

#### Defined in

[main.ts:182282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182282)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[location_code](../interfaces/IAppDataleAppListingsSearchLiveItem.md#location_code)

#### Defined in

[main.ts:182280](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182280)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[se_domain](../interfaces/IAppDataleAppListingsSearchLiveItem.md#se_domain)

#### Defined in

[main.ts:182278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182278)

___


### time\_update

• `Optional` **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[IAppDataleAppListingsSearchLiveItem](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[time_update](../interfaces/IAppDataleAppListingsSearchLiveItem.md#time_update)

#### Defined in

[main.ts:182290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182290)

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

[main.ts:182305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182305)

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

[main.ts:182328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182328)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Defined in

[main.ts:182321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182321)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")