[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PeriodCovered

# Class: PeriodCovered

## Implements

- [`IPeriodCovered`](../interfaces/IPeriodCovered.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeriodCovered.md#constructor)

### Properties

- [displayed\_date](PeriodCovered.md#displayed_date)
- [end\_date](PeriodCovered.md#end_date)
- [start\_date](PeriodCovered.md#start_date)

### Methods

- [init](PeriodCovered.md#init)
- [toJSON](PeriodCovered.md#tojson)
- [fromJS](PeriodCovered.md#fromjs)

## Constructors

### constructor

• **new PeriodCovered**(`data?`): [`PeriodCovered`](PeriodCovered.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeriodCovered`](../interfaces/IPeriodCovered.md) |

#### Returns

[`PeriodCovered`](PeriodCovered.md)

#### Defined in

[main.ts:50710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50710)

## Properties

### displayed\_date

• `Optional` **displayed\_date**: `string`

period displayed in SERP
example:
Mar 2, 2020 - Dec 9, 2022

#### Implementation of

[IPeriodCovered](../interfaces/IPeriodCovered.md).[displayed_date](../interfaces/IPeriodCovered.md#displayed_date)

#### Defined in

[main.ts:50706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50706)

___


### end\_date

• `Optional` **end\_date**: `string`

date and time when the period ends
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-12-09 02:00:00 +00:00

#### Implementation of

[IPeriodCovered](../interfaces/IPeriodCovered.md).[end_date](../interfaces/IPeriodCovered.md#end_date)

#### Defined in

[main.ts:50702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50702)

___


### start\_date

• `Optional` **start\_date**: `string`

date and time when the period starts
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2020-03-02 02:00:00 +00:00

#### Implementation of

[IPeriodCovered](../interfaces/IPeriodCovered.md).[start_date](../interfaces/IPeriodCovered.md#start_date)

#### Defined in

[main.ts:50697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50697)

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

[main.ts:50719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50719)

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

[main.ts:50738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50738)

___


### fromJS

▸ **fromJS**(`data`): [`PeriodCovered`](PeriodCovered.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeriodCovered`](PeriodCovered.md)

#### Defined in

[main.ts:50731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50731)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")