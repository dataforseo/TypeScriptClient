[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMathSolverSerpElementItem

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

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:34153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34153)

___


### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

[main.ts:34155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34155)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:34144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34144)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:34140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34140)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:34137](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34137)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:34159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34159)

___


### result

• `Optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Defined in

[main.ts:34151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34151)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:34148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34148)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:34146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34146)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")