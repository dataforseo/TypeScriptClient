[dataforseo-client](../README.md) / [Exports](../modules.md) / IMultiCarouselDataforseoLabsSerpElementItem

# Interface: IMultiCarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IMultiCarouselDataforseoLabsSerpElementItem`**

## Implemented by

- [`MultiCarouselDataforseoLabsSerpElementItem`](../classes/MultiCarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMultiCarouselDataforseoLabsSerpElementItem.md#items)
- [position](IMultiCarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IMultiCarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IMultiCarouselDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IMultiCarouselDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MultiCarouselElement`](../classes/MultiCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:92584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92584)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:92579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92579)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:92575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92575)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:92572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92572)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:92581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92581)
