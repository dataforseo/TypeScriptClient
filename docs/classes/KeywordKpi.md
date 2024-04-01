[Documentation](../README.md) / [Exports](../modules.md) / KeywordKpi

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

main.ts:132627

## Properties

### desktop

• `Optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[IKeywordKpi](../interfaces/IKeywordKpi.md).[desktop](../interfaces/IKeywordKpi.md#desktop)

#### Defined in

main.ts:132617

___

### mobile

• `Optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[IKeywordKpi](../interfaces/IKeywordKpi.md).[mobile](../interfaces/IKeywordKpi.md#mobile)

#### Defined in

main.ts:132620

___

### tablet

• `Optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[IKeywordKpi](../interfaces/IKeywordKpi.md).[tablet](../interfaces/IKeywordKpi.md#tablet)

#### Defined in

main.ts:132623

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

main.ts:132636

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

main.ts:132667

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

main.ts:132660
