[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesNewLostSummaryLiveResultInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveResultInfo

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#constructor)

### Properties

- [date\_from](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_from)
- [date\_to](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_to)
- [group\_range](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#group_range)
- [items](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items)
- [items\_count](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items_count)
- [target](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#target)

### Methods

- [init](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#init)
- [toJSON](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#tojson)
- [fromJS](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesNewLostSummaryLiveResultInfo**(`data?`): [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md) |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Defined in

[main.ts:139109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139109)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[date_from](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_from)

#### Defined in

[main.ts:139094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139094)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[date_to](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_to)

#### Defined in

[main.ts:139099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139099)

___


### group\_range

• `Optional` **group\_range**: `string`

group_range from the POST array

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[group_range](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#group_range)

#### Defined in

[main.ts:139101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139101)

___


### items

• `Optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[items](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items)

#### Defined in

[main.ts:139105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139105)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[items_count](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items_count)

#### Defined in

[main.ts:139103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139103)

___


### target

• `Optional` **target**: `string`

target from a POST array

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResultInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[target](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#target)

#### Defined in

[main.ts:139089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139089)

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

[main.ts:139118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139118)

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

[main.ts:139144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139144)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Defined in

[main.ts:139137](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139137)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")