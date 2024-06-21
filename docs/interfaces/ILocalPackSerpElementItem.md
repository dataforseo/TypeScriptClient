**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ILocalPackSerpElementItem

# Interface: ILocalPackSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Source

main.ts:31149

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:31136

***

### domain?

> **`optional`** **domain**: `string`

source domain

#### Source

main.ts:31138

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates whether the element is an ad

#### Source

main.ts:31144

***

### phone?

> **`optional`** **phone**: `string`

phone number

#### Source

main.ts:31140

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:31130

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:31126

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:31122

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:31147

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:31153

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Source

main.ts:31134

***

### url?

> **`optional`** **url**: `string`

source URL

#### Source

main.ts:31142

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:31132
