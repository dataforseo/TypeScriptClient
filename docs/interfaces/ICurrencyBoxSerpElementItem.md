[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ICurrencyBoxSerpElementItem

# Interface: ICurrencyBoxSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### converted\_currency?

> `optional` **converted\_currency**: `string`

converted currency

#### Defined in

main.ts:36204

***

### converted\_value?

> `optional` **converted\_value**: `number`

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Defined in

main.ts:36199

***

### currency?

> `optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Defined in

main.ts:36202

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:36214

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36191

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36187

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36183

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36218

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:36212

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:36209

***

### value?

> `optional` **value**: `number`

the value of the rating

#### Defined in

main.ts:36195

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36193
