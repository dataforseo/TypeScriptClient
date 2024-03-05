[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#constructor)

### Properties

- [app\_id](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#app_id)
- [items](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppCompetitorsLiveResultInfo**(`data?`): [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:111534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111534)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[app_id](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#app_id)

#### Defined in

[main.ts:111520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111520)

___

### items

• `Optional` **items**: [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items)

#### Defined in

[main.ts:111530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111530)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:111528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111528)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:111524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111524)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:111522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111522)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:111518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111518)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:111526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111526)

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

[main.ts:111543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111543)

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

[main.ts:111570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111570)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:111563](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111563)
