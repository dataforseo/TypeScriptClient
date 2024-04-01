[Documentation](../README.md) / [Exports](../modules.md) / IPeopleAlsoSearchDataforseoLabsSerpElementItem

# Interface: IPeopleAlsoSearchDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IPeopleAlsoSearchDataforseoLabsSerpElementItem`**

## Implemented by

- [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](../classes/PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#items)
- [position](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#se_type)
- [title](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#title)
- [xpath](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

elements of search results found in SERP

#### Defined in

main.ts:93796

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:93790

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:93786

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:93783

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:93780

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:93794

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:93792
