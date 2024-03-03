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

main.ts:91563

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:91557

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:91553

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:91550

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:91547

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:91561

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:91559
