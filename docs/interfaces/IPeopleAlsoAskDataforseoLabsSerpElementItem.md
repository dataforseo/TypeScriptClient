[Documentation](../README.md) / [Exports](../modules.md) / IPeopleAlsoAskDataforseoLabsSerpElementItem

# Interface: IPeopleAlsoAskDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IPeopleAlsoAskDataforseoLabsSerpElementItem`**

## Implemented by

- [`PeopleAlsoAskDataforseoLabsSerpElementItem`](../classes/PeopleAlsoAskDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#items)
- [position](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#se_type)
- [xpath](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:91357

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:91353

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:91349

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:91346

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:91343

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:91355
