[Documentation](../README.md) / [Exports](../modules.md) / RelatedSearchesDataforseoLabsSerpElementItem

# Class: RelatedSearchesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`RelatedSearchesDataforseoLabsSerpElementItem`**

## Implements

- [`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RelatedSearchesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](RelatedSearchesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](RelatedSearchesDataforseoLabsSerpElementItem.md#items)
- [position](RelatedSearchesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](RelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](RelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](RelatedSearchesDataforseoLabsSerpElementItem.md#se_type)
- [xpath](RelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](RelatedSearchesDataforseoLabsSerpElementItem.md#init)
- [toJSON](RelatedSearchesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](RelatedSearchesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new RelatedSearchesDataforseoLabsSerpElementItem**(`data?`): [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md) |

#### Returns

[`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:91588

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### items

• `Optional` **items**: `string`[]

elements of search results found in SERP

#### Implementation of

[IRelatedSearchesDataforseoLabsSerpElementItem](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[items](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:91584

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRelatedSearchesDataforseoLabsSerpElementItem](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[position](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:91580

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IRelatedSearchesDataforseoLabsSerpElementItem](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:91576

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IRelatedSearchesDataforseoLabsSerpElementItem](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:91573

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IRelatedSearchesDataforseoLabsSerpElementItem](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:91570

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRelatedSearchesDataforseoLabsSerpElementItem](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:91582

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

main.ts:91593

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

main.ts:91620

___

### fromJS

▸ **fromJS**(`data`): [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:91613
