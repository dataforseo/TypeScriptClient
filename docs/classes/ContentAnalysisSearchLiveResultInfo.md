[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisSearchLiveResultInfo

# Class: ContentAnalysisSearchLiveResultInfo

## Implements

- [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSearchLiveResultInfo.md#constructor)

### Properties

- [items](ContentAnalysisSearchLiveResultInfo.md#items)
- [items\_count](ContentAnalysisSearchLiveResultInfo.md#items_count)
- [offset\_token](ContentAnalysisSearchLiveResultInfo.md#offset_token)
- [total\_count](ContentAnalysisSearchLiveResultInfo.md#total_count)

### Methods

- [init](ContentAnalysisSearchLiveResultInfo.md#init)
- [toJSON](ContentAnalysisSearchLiveResultInfo.md#tojson)
- [fromJS](ContentAnalysisSearchLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSearchLiveResultInfo**(`data?`): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md) |

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Defined in

main.ts:156979

## Properties

### items

• `Optional` **items**: [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)[]

contains citations and related data

#### Implementation of

[IContentAnalysisSearchLiveResultInfo](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[items](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items)

#### Defined in

main.ts:156975

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IContentAnalysisSearchLiveResultInfo](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[items_count](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items_count)

#### Defined in

main.ts:156973

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IContentAnalysisSearchLiveResultInfo](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[offset_token](../interfaces/IContentAnalysisSearchLiveResultInfo.md#offset_token)

#### Defined in

main.ts:156969

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IContentAnalysisSearchLiveResultInfo](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[total_count](../interfaces/IContentAnalysisSearchLiveResultInfo.md#total_count)

#### Defined in

main.ts:156971

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

main.ts:156988

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

main.ts:157012

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Defined in

main.ts:157005
