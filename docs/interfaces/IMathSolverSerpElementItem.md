[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMathSolverSerpElementItem

# Interface: IMathSolverSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`MathSolverElement`](../classes/MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:36066

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

main.ts:36068

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36056

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36052

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36048

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36072

***

### result?

> `optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Defined in

main.ts:36063

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:36060

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36058
