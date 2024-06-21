**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ILocalServicesSerpElementItem

# Interface: ILocalServicesSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

source domain

#### Source

main.ts:35154

***

### items?

> **`optional`** **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:35157

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:35146

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:35142

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:35138

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:35161

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Source

main.ts:35150

***

### url?

> **`optional`** **url**: `string`

source URL

#### Source

main.ts:35152

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:35148
