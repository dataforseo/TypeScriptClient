[dataforseo-client](../README.md) / [Exports](../modules.md) / ITopStoriesDataforseoLabsSerpElementItem

# Interface: ITopStoriesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ITopStoriesDataforseoLabsSerpElementItem`**

## Implemented by

- [`TopStoriesDataforseoLabsSerpElementItem`](../classes/TopStoriesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITopStoriesDataforseoLabsSerpElementItem.md#items)
- [position](ITopStoriesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ITopStoriesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ITopStoriesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](ITopStoriesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TopStoriesElement`](../classes/TopStoriesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:92676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92676)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:92671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92671)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:92667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92667)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:92664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92664)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:92673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92673)
