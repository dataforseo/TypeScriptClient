[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#se_type)
- [seed\_keywords](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#seed_keywords)
- [total\_count](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingSerpCompetitorsLiveResultInfo**(`data?`): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:107075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107075)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items)

#### Defined in

[main.ts:107071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107071)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:107069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107069)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:107065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107065)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:107062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107062)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:107056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107056)

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[seed_keywords](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#seed_keywords)

#### Defined in

[main.ts:107059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107059)

___

### total\_count

• `Optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:107067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107067)

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

[main.ts:107084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107084)

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

[main.ts:107115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107115)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:107108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107108)
