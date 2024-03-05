[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesSummaryLiveResultInfo

# Class: BacklinksTimeseriesSummaryLiveResultInfo

## Implements

- [`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesSummaryLiveResultInfo.md#constructor)

### Properties

- [date\_from](BacklinksTimeseriesSummaryLiveResultInfo.md#date_from)
- [date\_to](BacklinksTimeseriesSummaryLiveResultInfo.md#date_to)
- [group\_range](BacklinksTimeseriesSummaryLiveResultInfo.md#group_range)
- [items](BacklinksTimeseriesSummaryLiveResultInfo.md#items)
- [items\_count](BacklinksTimeseriesSummaryLiveResultInfo.md#items_count)
- [target](BacklinksTimeseriesSummaryLiveResultInfo.md#target)

### Methods

- [init](BacklinksTimeseriesSummaryLiveResultInfo.md#init)
- [toJSON](BacklinksTimeseriesSummaryLiveResultInfo.md#tojson)
- [fromJS](BacklinksTimeseriesSummaryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesSummaryLiveResultInfo**(`data?`): [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md) |

#### Returns

[`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Defined in

[main.ts:138645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138645)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[IBacklinksTimeseriesSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[date_from](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#date_from)

#### Defined in

[main.ts:138630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138630)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBacklinksTimeseriesSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[date_to](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#date_to)

#### Defined in

[main.ts:138635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138635)

___

### group\_range

• `Optional` **group\_range**: `string`

group_range from a POST array

#### Implementation of

[IBacklinksTimeseriesSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[group_range](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#group_range)

#### Defined in

[main.ts:138637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138637)

___

### items

• `Optional` **items**: [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)[]

contains relevant summary data

#### Implementation of

[IBacklinksTimeseriesSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[items](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#items)

#### Defined in

[main.ts:138641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138641)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksTimeseriesSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[items_count](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#items_count)

#### Defined in

[main.ts:138639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138639)

___

### target

• `Optional` **target**: `string`

target from a POST array

#### Implementation of

[IBacklinksTimeseriesSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[target](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#target)

#### Defined in

[main.ts:138625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138625)

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

[main.ts:138654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138654)

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

[main.ts:138680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138680)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Defined in

[main.ts:138673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138673)
