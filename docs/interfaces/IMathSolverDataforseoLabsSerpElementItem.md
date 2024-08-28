[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMathSolverDataforseoLabsSerpElementItem

# Interface: IMathSolverDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`MathSolverElement`](../classes/MathSolverElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:99005

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:99009

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:98996

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:98992

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:98989

***

### result?

> `optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Defined in

main.ts:99003

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:99000

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:98998
