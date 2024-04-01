[Documentation](../README.md) / [Exports](../modules.md) / IPodcastsDataforseoLabsSerpElementItem

# Interface: IPodcastsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IPodcastsDataforseoLabsSerpElementItem`**

## Implemented by

- [`PodcastsDataforseoLabsSerpElementItem`](../classes/PodcastsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPodcastsDataforseoLabsSerpElementItem.md#items)
- [position](IPodcastsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IPodcastsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IPodcastsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PodcastsElement`](../classes/PodcastsElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:97885

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97881

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97877

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97874

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97883
