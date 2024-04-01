[Documentation](../README.md) / [Exports](../modules.md) / ScholarlyArticlesDataforseoLabsSerpElementItem

# Class: ScholarlyArticlesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`ScholarlyArticlesDataforseoLabsSerpElementItem`**

## Implements

- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ScholarlyArticlesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ScholarlyArticlesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](ScholarlyArticlesDataforseoLabsSerpElementItem.md#items)
- [position](ScholarlyArticlesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)
- [title](ScholarlyArticlesDataforseoLabsSerpElementItem.md#title)
- [url](ScholarlyArticlesDataforseoLabsSerpElementItem.md#url)
- [xpath](ScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](ScholarlyArticlesDataforseoLabsSerpElementItem.md#init)
- [toJSON](ScholarlyArticlesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](ScholarlyArticlesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ScholarlyArticlesDataforseoLabsSerpElementItem**(`data?`): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md) |

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:97636

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

elements of search results found in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[items](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97632

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[position](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97624

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97620

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97617

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[title](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97628

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[url](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:97630

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97626

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:97641

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:97669

___

### fromJS

▸ **fromJS**(`data`): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97662
