[**Documentation**](../README.md)

***

[Documentation](../README.md) / CurrencyBoxSerpElementItem

# Class: CurrencyBoxSerpElementItem

Defined in: main.ts:36419

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CurrencyBoxSerpElementItem()

> **new CurrencyBoxSerpElementItem**(`data`?): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

Defined in: main.ts:36448

#### Parameters

##### data?

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### converted\_currency?

> `optional` **converted\_currency**: `string`

Defined in: main.ts:36430

converted currency

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`converted_currency`](../interfaces/ICurrencyBoxSerpElementItem.md#converted_currency)

***

### converted\_value?

> `optional` **converted\_value**: `number`

Defined in: main.ts:36425

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`converted_value`](../interfaces/ICurrencyBoxSerpElementItem.md#converted_value)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:36428

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`currency`](../interfaces/ICurrencyBoxSerpElementItem.md#currency)

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

Defined in: main.ts:36440

contains data provided in the graph of the element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`graph`](../interfaces/ICurrencyBoxSerpElementItem.md#graph)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`position`](../interfaces/ICurrencyBoxSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rank_absolute`](../interfaces/ICurrencyBoxSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rank_group`](../interfaces/ICurrencyBoxSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36444

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`rectangle`](../interfaces/ICurrencyBoxSerpElementItem.md#rectangle)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:36438

results table
if there are none, equals null

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`table`](../interfaces/ICurrencyBoxSerpElementItem.md#table)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:36435

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`timestamp`](../interfaces/ICurrencyBoxSerpElementItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`type`](../interfaces/ICurrencyBoxSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:36421

the value of the rating

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`value`](../interfaces/ICurrencyBoxSerpElementItem.md#value)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md).[`xpath`](../interfaces/ICurrencyBoxSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36453

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36478

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

Defined in: main.ts:36471

#### Parameters

##### data

`any`

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
