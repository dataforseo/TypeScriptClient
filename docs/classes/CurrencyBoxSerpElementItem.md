**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CurrencyBoxSerpElementItem

# Class: CurrencyBoxSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CurrencyBoxSerpElementItem(data)

> **new CurrencyBoxSerpElementItem**(`data`?): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Parameters

• **data?**: [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:35925

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### converted\_currency?

> **`optional`** **converted\_currency**: `string`

converted currency

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`converted_currency`](../interfaces/ICurrencyBoxSerpElementItem.md#converted_currency)

#### Source

main.ts:35907

***

### converted\_value?

> **`optional`** **converted\_value**: `number`

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`converted_value`](../interfaces/ICurrencyBoxSerpElementItem.md#converted_value)

#### Source

main.ts:35902

***

### currency?

> **`optional`** **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`currency`](../interfaces/ICurrencyBoxSerpElementItem.md#currency)

#### Source

main.ts:35905

***

### graph?

> **`optional`** **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`graph`](../interfaces/ICurrencyBoxSerpElementItem.md#graph)

#### Source

main.ts:35917

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`position`](../interfaces/ICurrencyBoxSerpElementItem.md#position)

#### Source

main.ts:35894

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rank_absolute`](../interfaces/ICurrencyBoxSerpElementItem.md#rank_absolute)

#### Source

main.ts:35890

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rank_group`](../interfaces/ICurrencyBoxSerpElementItem.md#rank_group)

#### Source

main.ts:35886

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rectangle`](../interfaces/ICurrencyBoxSerpElementItem.md#rectangle)

#### Source

main.ts:35921

***

### table?

> **`optional`** **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`table`](../interfaces/ICurrencyBoxSerpElementItem.md#table)

#### Source

main.ts:35915

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`timestamp`](../interfaces/ICurrencyBoxSerpElementItem.md#timestamp)

#### Source

main.ts:35912

***

### value?

> **`optional`** **value**: `number`

the value of the rating

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`value`](../interfaces/ICurrencyBoxSerpElementItem.md#value)

#### Source

main.ts:35898

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`xpath`](../interfaces/ICurrencyBoxSerpElementItem.md#xpath)

#### Source

main.ts:35896

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:35930

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:35959

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35952
