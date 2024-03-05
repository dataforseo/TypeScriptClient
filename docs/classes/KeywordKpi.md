[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordKpi

# Class: KeywordKpi

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordKpi.md#constructor)

### Properties

- [desktop](KeywordKpi.md#desktop)
- [mobile](KeywordKpi.md#mobile)
- [tablet](KeywordKpi.md#tablet)

### Methods

- [init](KeywordKpi.md#init)
- [toJSON](KeywordKpi.md#tojson)
- [fromJS](KeywordKpi.md#fromjs)

## Constructors

### constructor

• **new KeywordKpi**(`data?`): [`KeywordKpi`](KeywordKpi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordKpi`](../interfaces/IKeywordKpi.md) |

#### Returns

[`KeywordKpi`](KeywordKpi.md)

#### Defined in

[main.ts:127260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127260)

## Properties

### desktop

• `Optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[IKeywordKpi](../interfaces/IKeywordKpi.md).[desktop](../interfaces/IKeywordKpi.md#desktop)

#### Defined in

[main.ts:127250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127250)

___

### mobile

• `Optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[IKeywordKpi](../interfaces/IKeywordKpi.md).[mobile](../interfaces/IKeywordKpi.md#mobile)

#### Defined in

[main.ts:127253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127253)

___

### tablet

• `Optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[IKeywordKpi](../interfaces/IKeywordKpi.md).[tablet](../interfaces/IKeywordKpi.md#tablet)

#### Defined in

[main.ts:127256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127256)

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

[main.ts:127269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127269)

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

[main.ts:127300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127300)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordKpi`](KeywordKpi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordKpi`](KeywordKpi.md)

#### Defined in

[main.ts:127293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127293)
