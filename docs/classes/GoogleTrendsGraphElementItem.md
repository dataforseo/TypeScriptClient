[Documentation](../README.md) / [Exports](../modules.md) / GoogleTrendsGraphElementItem

# Class: GoogleTrendsGraphElementItem

## Hierarchy

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

  ↳ **`GoogleTrendsGraphElementItem`**

## Implements

- [`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleTrendsGraphElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleTrendsGraphElementItem.md#_discriminator)
- [averages](GoogleTrendsGraphElementItem.md#averages)
- [data](GoogleTrendsGraphElementItem.md#data)
- [keywords](GoogleTrendsGraphElementItem.md#keywords)
- [position](GoogleTrendsGraphElementItem.md#position)
- [title](GoogleTrendsGraphElementItem.md#title)

### Methods

- [init](GoogleTrendsGraphElementItem.md#init)
- [toJSON](GoogleTrendsGraphElementItem.md#tojson)
- [fromJS](GoogleTrendsGraphElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleTrendsGraphElementItem**(`data?`): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md) |

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[constructor](BaseGoogleTrendsItem.md#constructor)

#### Defined in

main.ts:120639

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[_discriminator](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:20382

___

### averages

• `Optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Implementation of

[IGoogleTrendsGraphElementItem](../interfaces/IGoogleTrendsGraphElementItem.md).[averages](../interfaces/IGoogleTrendsGraphElementItem.md#averages)

#### Defined in

main.ts:120635

___

### data

• `Optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Implementation of

[IGoogleTrendsGraphElementItem](../interfaces/IGoogleTrendsGraphElementItem.md).[data](../interfaces/IGoogleTrendsGraphElementItem.md#data)

#### Defined in

main.ts:120633

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[IGoogleTrendsGraphElementItem](../interfaces/IGoogleTrendsGraphElementItem.md).[keywords](../interfaces/IGoogleTrendsGraphElementItem.md#keywords)

#### Defined in

main.ts:120631

___

### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IGoogleTrendsGraphElementItem](../interfaces/IGoogleTrendsGraphElementItem.md).[position](../interfaces/IGoogleTrendsGraphElementItem.md#position)

#### Defined in

main.ts:120626

___

### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[IGoogleTrendsGraphElementItem](../interfaces/IGoogleTrendsGraphElementItem.md).[title](../interfaces/IGoogleTrendsGraphElementItem.md#title)

#### Defined in

main.ts:120628

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

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[init](BaseGoogleTrendsItem.md#init)

#### Defined in

main.ts:120644

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

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[toJSON](BaseGoogleTrendsItem.md#tojson)

#### Defined in

main.ts:120678

___

### fromJS

▸ **fromJS**(`data`): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[fromJS](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:120671
