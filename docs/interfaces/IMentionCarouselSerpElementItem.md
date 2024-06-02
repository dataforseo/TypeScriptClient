**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMentionCarouselSerpElementItem

# Interface: IMentionCarouselSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`MentionCarouselElement`](../classes/MentionCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:32033

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:32026

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:32022

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:32018

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:32037

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Source

main.ts:32030

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:32028
