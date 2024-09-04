[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IHotelsPackSerpElementItem

# Interface: IHotelsPackSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

main.ts:35084

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

main.ts:35089

***

### items?

> `optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:35092

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35075

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:35071

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:35067

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35096

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:35079

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35077
