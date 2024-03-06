[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksHistoryLiveResultInfo

# Class: BacklinksHistoryLiveResultInfo

## Implements

- [`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksHistoryLiveResultInfo.md#constructor)

### Properties

- [date\_from](BacklinksHistoryLiveResultInfo.md#date_from)
- [date\_to](BacklinksHistoryLiveResultInfo.md#date_to)
- [items](BacklinksHistoryLiveResultInfo.md#items)
- [items\_count](BacklinksHistoryLiveResultInfo.md#items_count)
- [target](BacklinksHistoryLiveResultInfo.md#target)

### Methods

- [init](BacklinksHistoryLiveResultInfo.md#init)
- [toJSON](BacklinksHistoryLiveResultInfo.md#tojson)
- [fromJS](BacklinksHistoryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksHistoryLiveResultInfo**(`data?`): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md) |

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Defined in

[main.ts:130371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130371)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[date_from](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_from)

#### Defined in

[main.ts:130356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130356)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[date_to](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_to)

#### Defined in

[main.ts:130361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130361)

___


### items

• `Optional` **items**: [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)[]

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[items](../interfaces/IBacklinksHistoryLiveResultInfo.md#items)

#### Defined in

[main.ts:130367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130367)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[items_count](../interfaces/IBacklinksHistoryLiveResultInfo.md#items_count)

#### Defined in

[main.ts:130363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130363)

___


### target

• `Optional` **target**: `string`

target from the POST array

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[target](../interfaces/IBacklinksHistoryLiveResultInfo.md#target)

#### Defined in

[main.ts:130351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130351)

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

[main.ts:130380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130380)

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

[main.ts:130405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130405)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Defined in

[main.ts:130398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130398)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")