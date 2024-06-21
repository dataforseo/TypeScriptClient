**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ICurrencyBoxSerpElementItem

# Interface: ICurrencyBoxSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### converted\_currency?

> **`optional`** **converted\_currency**: `string`

converted currency

#### Source

main.ts:35681

***

### converted\_value?

> **`optional`** **converted\_value**: `number`

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Source

main.ts:35676

***

### currency?

> **`optional`** **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Source

main.ts:35679

***

### graph?

> **`optional`** **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Source

main.ts:35691

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:35668

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:35664

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:35660

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:35695

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:35689

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:35686

***

### value?

> **`optional`** **value**: `number`

the value of the rating

#### Source

main.ts:35672

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:35670
