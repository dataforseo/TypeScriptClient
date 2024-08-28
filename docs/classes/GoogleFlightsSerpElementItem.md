[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / GoogleFlightsSerpElementItem

# Class: GoogleFlightsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleFlightsSerpElementItem()

> **new GoogleFlightsSerpElementItem**(`data`?): [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md)

#### Returns

[`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32481

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`items`](../interfaces/IGoogleFlightsSerpElementItem.md#items)

#### Defined in

main.ts:32473

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`position`](../interfaces/IGoogleFlightsSerpElementItem.md#position)

#### Defined in

main.ts:32464

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFlightsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32460

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFlightsSerpElementItem.md#rank_group)

#### Defined in

main.ts:32456

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleFlightsSerpElementItem.md#rectangle)

#### Defined in

main.ts:32477

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`title`](../interfaces/IGoogleFlightsSerpElementItem.md#title)

#### Defined in

main.ts:32468

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`url`](../interfaces/IGoogleFlightsSerpElementItem.md#url)

#### Defined in

main.ts:32470

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`xpath`](../interfaces/IGoogleFlightsSerpElementItem.md#xpath)

#### Defined in

main.ts:32466

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

main.ts:32486

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

main.ts:32515

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32508
