[Documentation](../README.md) / [Exports](../modules.md) / MicrodataInspectionInfo

# Class: MicrodataInspectionInfo

## Implements

- [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MicrodataInspectionInfo.md#constructor)

### Properties

- [fields](MicrodataInspectionInfo.md#fields)
- [types](MicrodataInspectionInfo.md#types)

### Methods

- [init](MicrodataInspectionInfo.md#init)
- [toJSON](MicrodataInspectionInfo.md#tojson)
- [fromJS](MicrodataInspectionInfo.md#fromjs)

## Constructors

### constructor

• **new MicrodataInspectionInfo**(`data?`): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md) |

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Defined in

main.ts:156244

## Properties

### fields

• `Optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[IMicrodataInspectionInfo](../interfaces/IMicrodataInspectionInfo.md).[fields](../interfaces/IMicrodataInspectionInfo.md#fields)

#### Defined in

main.ts:156240

___

### types

• `Optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[IMicrodataInspectionInfo](../interfaces/IMicrodataInspectionInfo.md).[types](../interfaces/IMicrodataInspectionInfo.md#types)

#### Defined in

main.ts:156237

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

main.ts:156253

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

main.ts:156279

___

### fromJS

▸ **fromJS**(`data`): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Defined in

main.ts:156272
