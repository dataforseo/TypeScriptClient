[dataforseo-client](../README.md) / [Exports](../modules.md) / DatasetDescription

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

[main.ts:50778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50778)

## Properties

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

links featured in the ‘dataset_description’

#### Implementation of

[IDatasetDescription](../interfaces/IDatasetDescription.md).[links](../interfaces/IDatasetDescription.md#links)

#### Defined in

[main.ts:50774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50774)

___

### text

• `Optional` **text**: `string`

text of the description

#### Implementation of

[IDatasetDescription](../interfaces/IDatasetDescription.md).[text](../interfaces/IDatasetDescription.md#text)

#### Defined in

[main.ts:50772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50772)

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

[main.ts:50787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50787)

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

[main.ts:50809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50809)

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

[main.ts:50802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50802)
