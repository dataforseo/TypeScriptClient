[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAiOverviewSerpElementItem

# Interface: IAiOverviewSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asynchronous\_ai\_overview?

> `optional` **asynchronous\_ai\_overview**: `boolean`

indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache;

#### Defined in

main.ts:38476

***

### items?

> `optional` **items**: [`AiOverviewElement`](../classes/AiOverviewElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:38479

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:38470

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:38466

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:38462

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:38486

***

### references?

> `optional` **references**: [`AiOverviewReference`](../classes/AiOverviewReference.md)[]

additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview

#### Defined in

main.ts:38482

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:38472
