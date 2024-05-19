**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelsPackSerpElementItem

# Interface: IHotelsPackSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Source

main.ts:34490

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Source

main.ts:34495

***

### items?

> **`optional`** **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:34498

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:34481

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:34477

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:34473

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:34502

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Source

main.ts:34485

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:34483
