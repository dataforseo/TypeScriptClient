[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CurrencyBoxSerpElementItem

# Class: CurrencyBoxSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CurrencyBoxSerpElementItem()

> **new CurrencyBoxSerpElementItem**(`data`?): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Parameters

• **data?**: [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:34722

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### converted\_currency?

> `optional` **converted\_currency**: `string`

converted currency

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`converted_currency`](../interfaces/ICurrencyBoxSerpElementItem.md#converted_currency)

#### Defined in

main.ts:34704

***

### converted\_value?

> `optional` **converted\_value**: `number`

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`converted_value`](../interfaces/ICurrencyBoxSerpElementItem.md#converted_value)

#### Defined in

main.ts:34699

***

### currency?

> `optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`currency`](../interfaces/ICurrencyBoxSerpElementItem.md#currency)

#### Defined in

main.ts:34702

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`graph`](../interfaces/ICurrencyBoxSerpElementItem.md#graph)

#### Defined in

main.ts:34714

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`position`](../interfaces/ICurrencyBoxSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:20363

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rank_absolute`](../interfaces/ICurrencyBoxSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20359

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rank_group`](../interfaces/ICurrencyBoxSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rectangle`](../interfaces/ICurrencyBoxSerpElementItem.md#rectangle)

#### Defined in

main.ts:34718

***

### table?

> `optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`table`](../interfaces/ICurrencyBoxSerpElementItem.md#table)

#### Defined in

main.ts:34712

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`timestamp`](../interfaces/ICurrencyBoxSerpElementItem.md#timestamp)

#### Defined in

main.ts:34709

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`type`](../interfaces/ICurrencyBoxSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### value?

> `optional` **value**: `number`

the value of the rating

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`value`](../interfaces/ICurrencyBoxSerpElementItem.md#value)

#### Defined in

main.ts:34695

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`xpath`](../interfaces/ICurrencyBoxSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20365

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:34727

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:34752

***

### fromJS()

> `static` **fromJS**(`data`): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34745
