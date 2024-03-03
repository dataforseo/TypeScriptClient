[Documentation](../README.md) / [Exports](../modules.md) / DatasetDescription

# Class: DatasetDescription

## Implements

- [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DatasetDescription.md#constructor)

### Properties

- [links](DatasetDescription.md#links)
- [text](DatasetDescription.md#text)

### Methods

- [init](DatasetDescription.md#init)
- [toJSON](DatasetDescription.md#tojson)
- [fromJS](DatasetDescription.md#fromjs)

## Constructors

### constructor

• **new DatasetDescription**(`data?`): [`DatasetDescription`](DatasetDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDatasetDescription`](../interfaces/IDatasetDescription.md) |

#### Returns

[`DatasetDescription`](DatasetDescription.md)

#### Defined in

main.ts:50920

## Properties

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

links featured in the ‘dataset_description’

#### Implementation of

[IDatasetDescription](../interfaces/IDatasetDescription.md).[links](../interfaces/IDatasetDescription.md#links)

#### Defined in

main.ts:50916

___

### text

• `Optional` **text**: `string`

text of the description

#### Implementation of

[IDatasetDescription](../interfaces/IDatasetDescription.md).[text](../interfaces/IDatasetDescription.md#text)

#### Defined in

main.ts:50914

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

main.ts:50929

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

main.ts:50951

___

### fromJS

▸ **fromJS**(`data`): [`DatasetDescription`](DatasetDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DatasetDescription`](DatasetDescription.md)

#### Defined in

main.ts:50944
