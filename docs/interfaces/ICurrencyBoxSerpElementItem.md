[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ICurrencyBoxSerpElementItem

# Interface: ICurrencyBoxSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ICurrencyBoxSerpElementItem`**

## Implemented by

- [`CurrencyBoxSerpElementItem`](../classes/CurrencyBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [converted\_currency](ICurrencyBoxSerpElementItem.md#converted_currency)
- [converted\_value](ICurrencyBoxSerpElementItem.md#converted_value)
- [currency](ICurrencyBoxSerpElementItem.md#currency)
- [graph](ICurrencyBoxSerpElementItem.md#graph)
- [position](ICurrencyBoxSerpElementItem.md#position)
- [rank\_absolute](ICurrencyBoxSerpElementItem.md#rank_absolute)
- [rank\_group](ICurrencyBoxSerpElementItem.md#rank_group)
- [rectangle](ICurrencyBoxSerpElementItem.md#rectangle)
- [table](ICurrencyBoxSerpElementItem.md#table)
- [timestamp](ICurrencyBoxSerpElementItem.md#timestamp)
- [value](ICurrencyBoxSerpElementItem.md#value)
- [xpath](ICurrencyBoxSerpElementItem.md#xpath)

## Properties

### converted\_currency

• `Optional` **converted\_currency**: `string`

converted currency

#### Defined in

[main.ts:34287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34287)

___


### converted\_value

• `Optional` **converted\_value**: `number`

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Defined in

[main.ts:34282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34282)

___


### currency

• `Optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Defined in

[main.ts:34285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34285)

___


### graph

• `Optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

[main.ts:34297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34297)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:34274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34274)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:34270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34270)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:34267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34267)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:34301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34301)

___


### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

[main.ts:34295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34295)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:34292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34292)

___


### value

• `Optional` **value**: `number`

the value of the rating

#### Defined in

[main.ts:34278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34278)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:34276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34276)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")