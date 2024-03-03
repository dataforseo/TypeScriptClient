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

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:35513

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35507

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:35503

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:35500

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35517

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:35511

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35509
