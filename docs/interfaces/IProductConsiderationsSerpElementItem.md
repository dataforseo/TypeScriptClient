**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IProductConsiderationsSerpElementItem

# Interface: IProductConsiderationsSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`ProductConsiderationsElement`](../classes/ProductConsiderationsElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:35903

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:35896

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:35892

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:35888

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:35907

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Source

main.ts:35900

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:35898
