[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAnswerBoxSerpElementItem

# Interface: IAnswerBoxSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

main.ts:32166

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:32159

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:32155

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:32151

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:32170

***

### text?

> `optional` **text**: `string`[]

text
if there is none, equals null

#### Defined in

main.ts:32164

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:32161
