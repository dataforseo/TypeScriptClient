[dataforseo-client](../README.md) / [Exports](../modules.md) / IPeopleAlsoAskSerpElementItem

# Interface: IPeopleAlsoAskSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IPeopleAlsoAskSerpElementItem`**

## Implemented by

- [`PeopleAlsoAskSerpElementItem`](../classes/PeopleAlsoAskSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPeopleAlsoAskSerpElementItem.md#items)
- [position](IPeopleAlsoAskSerpElementItem.md#position)
- [rank\_absolute](IPeopleAlsoAskSerpElementItem.md#rank_absolute)
- [rank\_group](IPeopleAlsoAskSerpElementItem.md#rank_group)
- [rectangle](IPeopleAlsoAskSerpElementItem.md#rectangle)
- [xpath](IPeopleAlsoAskSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:28663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28663)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:28659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28659)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:28655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28655)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:28652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28652)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:28667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28667)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:28661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28661)
