[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#se_type)
- [seed\_keywords](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#seed_keywords)
- [total\_count](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSerpCompetitorsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:87809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87809)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items)

#### Defined in

[main.ts:87805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87805)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:87803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87803)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:87799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87799)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:87796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87796)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:87790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87790)

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[seed_keywords](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#seed_keywords)

#### Defined in

[main.ts:87793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87793)

___

### total\_count

• `Optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:87801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87801)

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

[main.ts:87818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87818)

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

[main.ts:87849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87849)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Defined in

[main.ts:87842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87842)
