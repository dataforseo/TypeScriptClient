[Documentation](../README.md) / [Exports](../modules.md) / IRelatedSearchesDataforseoLabsSerpElementItem

# Interface: IRelatedSearchesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IRelatedSearchesDataforseoLabsSerpElementItem`**

## Implemented by

- [`RelatedSearchesDataforseoLabsSerpElementItem`](../classes/RelatedSearchesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRelatedSearchesDataforseoLabsSerpElementItem.md#items)
- [position](IRelatedSearchesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](IRelatedSearchesDataforseoLabsSerpElementItem.md#se_type)
- [xpath](IRelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

elements of search results found in SERP

#### Defined in

main.ts:91657

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:91653

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:91649

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:91646

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:91643

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:91655
