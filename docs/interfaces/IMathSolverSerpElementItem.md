[Documentation](../README.md) / [Exports](../modules.md) / IMathSolverSerpElementItem

# Interface: IMathSolverSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IMathSolverSerpElementItem`**

## Implemented by

- [`MathSolverSerpElementItem`](../classes/MathSolverSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMathSolverSerpElementItem.md#items)
- [links](IMathSolverSerpElementItem.md#links)
- [position](IMathSolverSerpElementItem.md#position)
- [rank\_absolute](IMathSolverSerpElementItem.md#rank_absolute)
- [rank\_group](IMathSolverSerpElementItem.md#rank_group)
- [rectangle](IMathSolverSerpElementItem.md#rectangle)
- [result](IMathSolverSerpElementItem.md#result)
- [title](IMathSolverSerpElementItem.md#title)
- [xpath](IMathSolverSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MathSolverElement`](../classes/MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:35082

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

main.ts:35084

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35072

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:35068

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:35064

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35088

___

### result

• `Optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Defined in

main.ts:35079

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:35076

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35074
