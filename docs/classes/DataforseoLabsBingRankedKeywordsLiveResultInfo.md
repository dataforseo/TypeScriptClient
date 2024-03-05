[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRankedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#location_code)
- [metrics](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics)
- [metrics\_absolute](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics_absolute)
- [se\_type](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#se_type)
- [target](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#target)
- [total\_count](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingRankedKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRankedKeywordsLiveResultInfo**(`data?`): [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:105398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105398)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items)

#### Defined in

[main.ts:105394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105394)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:105386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105386)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:105382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105382)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:105379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105379)

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[metrics](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics)

#### Defined in

[main.ts:105389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105389)

___

### metrics\_absolute

• `Optional` **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[metrics_absolute](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics_absolute)

#### Defined in

[main.ts:105392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105392)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:105374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105374)

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[target](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#target)

#### Defined in

[main.ts:105376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105376)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:105384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105384)

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

[main.ts:105407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105407)

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

[main.ts:105448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105448)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:105441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105441)
