[Documentation](../README.md) / [Exports](../modules.md) / ITwitterSerpElementItem

# Interface: ITwitterSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ITwitterSerpElementItem`**

## Implemented by

- [`TwitterSerpElementItem`](../classes/TwitterSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITwitterSerpElementItem.md#items)
- [position](ITwitterSerpElementItem.md#position)
- [rank\_absolute](ITwitterSerpElementItem.md#rank_absolute)
- [rank\_group](ITwitterSerpElementItem.md#rank_group)
- [rectangle](ITwitterSerpElementItem.md#rectangle)
- [title](ITwitterSerpElementItem.md#title)
- [url](ITwitterSerpElementItem.md#url)
- [xpath](ITwitterSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:29940

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29931

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:29927

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:29923

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29944

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:29935

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:29937

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29933
