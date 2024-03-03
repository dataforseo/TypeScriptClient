[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo**(`data?`): [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Defined in

main.ts:102400

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items)

#### Defined in

main.ts:102396

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items_count)

#### Defined in

main.ts:102394

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#language_code)

#### Defined in

main.ts:102390

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#location_code)

#### Defined in

main.ts:102387

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#se_type)

#### Defined in

main.ts:102384

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#total_count)

#### Defined in

main.ts:102392

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

main.ts:102409

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

main.ts:102435

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Defined in

main.ts:102428
