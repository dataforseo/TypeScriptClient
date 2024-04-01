[Documentation](../README.md) / [Exports](../modules.md) / IAnswerBoxSerpElementItem

# Interface: IAnswerBoxSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IAnswerBoxSerpElementItem`**

## Implemented by

- [`AnswerBoxSerpElementItem`](../classes/AnswerBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [links](IAnswerBoxSerpElementItem.md#links)
- [position](IAnswerBoxSerpElementItem.md#position)
- [rank\_absolute](IAnswerBoxSerpElementItem.md#rank_absolute)
- [rank\_group](IAnswerBoxSerpElementItem.md#rank_group)
- [rectangle](IAnswerBoxSerpElementItem.md#rectangle)
- [text](IAnswerBoxSerpElementItem.md#text)
- [xpath](IAnswerBoxSerpElementItem.md#xpath)

## Properties

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

main.ts:31200

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31193

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31189

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31185

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31204

___

### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Defined in

main.ts:31198

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31195
