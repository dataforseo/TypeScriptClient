[Documentation](../README.md) / [Exports](../modules.md) / DataforseoTrendsGraphElementItem

# Class: DataforseoTrendsGraphElementItem

## Hierarchy

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

  ↳ **`DataforseoTrendsGraphElementItem`**

## Implements

- [`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoTrendsGraphElementItem.md#constructor)

### Properties

- [\_discriminator](DataforseoTrendsGraphElementItem.md#_discriminator)
- [averages](DataforseoTrendsGraphElementItem.md#averages)
- [data](DataforseoTrendsGraphElementItem.md#data)
- [keywords](DataforseoTrendsGraphElementItem.md#keywords)
- [position](DataforseoTrendsGraphElementItem.md#position)

### Methods

- [init](DataforseoTrendsGraphElementItem.md#init)
- [toJSON](DataforseoTrendsGraphElementItem.md#tojson)
- [fromJS](DataforseoTrendsGraphElementItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoTrendsGraphElementItem**(`data?`): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md) |

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[constructor](BaseDataforseoTrendsItem.md#constructor)

#### Defined in

main.ts:124918

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[_discriminator](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:20906

___

### averages

• `Optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Implementation of

[IDataforseoTrendsGraphElementItem](../interfaces/IDataforseoTrendsGraphElementItem.md).[averages](../interfaces/IDataforseoTrendsGraphElementItem.md#averages)

#### Defined in

main.ts:124914

___

### data

• `Optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Implementation of

[IDataforseoTrendsGraphElementItem](../interfaces/IDataforseoTrendsGraphElementItem.md).[data](../interfaces/IDataforseoTrendsGraphElementItem.md#data)

#### Defined in

main.ts:124912

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[IDataforseoTrendsGraphElementItem](../interfaces/IDataforseoTrendsGraphElementItem.md).[keywords](../interfaces/IDataforseoTrendsGraphElementItem.md#keywords)

#### Defined in

main.ts:124910

___

### position

• `Optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IDataforseoTrendsGraphElementItem](../interfaces/IDataforseoTrendsGraphElementItem.md).[position](../interfaces/IDataforseoTrendsGraphElementItem.md#position)

#### Defined in

main.ts:124907

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[init](BaseDataforseoTrendsItem.md#init)

#### Defined in

main.ts:124923

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[toJSON](BaseDataforseoTrendsItem.md#tojson)

#### Defined in

main.ts:124956

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[BaseDataforseoTrendsItem](BaseDataforseoTrendsItem.md).[fromJS](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:124949
