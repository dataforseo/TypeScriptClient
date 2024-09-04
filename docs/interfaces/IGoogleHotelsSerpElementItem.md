[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleHotelsSerpElementItem

# Interface: IGoogleHotelsSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:35792

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

main.ts:35788

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35782

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:35778

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:35774

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35796

***

### url?

> `optional` **url**: `string`

source URL

#### Defined in

main.ts:35790

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35784
