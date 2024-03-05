[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleFlightsSerpElementItem

# Interface: IGoogleFlightsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGoogleFlightsSerpElementItem`**

## Implemented by

- [`GoogleFlightsSerpElementItem`](../classes/GoogleFlightsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IGoogleFlightsSerpElementItem.md#items)
- [position](IGoogleFlightsSerpElementItem.md#position)
- [rank\_absolute](IGoogleFlightsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleFlightsSerpElementItem.md#rank_group)
- [rectangle](IGoogleFlightsSerpElementItem.md#rectangle)
- [title](IGoogleFlightsSerpElementItem.md#title)
- [url](IGoogleFlightsSerpElementItem.md#url)
- [xpath](IGoogleFlightsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`GoogleFlightsElement`](../classes/GoogleFlightsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:30767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30767)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:30759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30759)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:30755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30755)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:30752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30752)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:30771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30771)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:30763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30763)

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:30765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30765)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:30761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30761)
