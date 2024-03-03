[Documentation](../README.md) / [Exports](../modules.md) / IMentionCarouselDataforseoLabsSerpElementItem

# Interface: IMentionCarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IMentionCarouselDataforseoLabsSerpElementItem`**

## Implemented by

- [`MentionCarouselDataforseoLabsSerpElementItem`](../classes/MentionCarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMentionCarouselDataforseoLabsSerpElementItem.md#items)
- [position](IMentionCarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IMentionCarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IMentionCarouselDataforseoLabsSerpElementItem.md#rank_group)
- [title](IMentionCarouselDataforseoLabsSerpElementItem.md#title)
- [xpath](IMentionCarouselDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MentionCarouselElement`](../classes/MentionCarouselElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:95194

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95188

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95184

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95181

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95192

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95190
