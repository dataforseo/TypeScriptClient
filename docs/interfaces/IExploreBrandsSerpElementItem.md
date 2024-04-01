[Documentation](../README.md) / [Exports](../modules.md) / IExploreBrandsSerpElementItem

# Interface: IExploreBrandsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IExploreBrandsSerpElementItem`**

## Implemented by

- [`ExploreBrandsSerpElementItem`](../classes/ExploreBrandsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IExploreBrandsSerpElementItem.md#items)
- [position](IExploreBrandsSerpElementItem.md#position)
- [rank\_absolute](IExploreBrandsSerpElementItem.md#rank_absolute)
- [rank\_group](IExploreBrandsSerpElementItem.md#rank_group)
- [rectangle](IExploreBrandsSerpElementItem.md#rectangle)
- [title](IExploreBrandsSerpElementItem.md#title)
- [xpath](IExploreBrandsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ExploreBrandsElement`](../classes/ExploreBrandsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:36338

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36331

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36327

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36323

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36342

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:36335

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36333
