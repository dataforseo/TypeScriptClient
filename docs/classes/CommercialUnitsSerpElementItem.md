[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CommercialUnitsSerpElementItem

# Class: CommercialUnitsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsSerpElementItem()

> **new CommercialUnitsSerpElementItem**(`data`?): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Parameters

• **data?**: [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:34376

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

contains arrays of specific images

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`items`](../interfaces/ICommercialUnitsSerpElementItem.md#items)

#### Defined in

main.ts:34368

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`position`](../interfaces/ICommercialUnitsSerpElementItem.md#position)

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

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_absolute`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_absolute)

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

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_group`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_group)

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

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rectangle`](../interfaces/ICommercialUnitsSerpElementItem.md#rectangle)

#### Defined in

main.ts:34372

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`title`](../interfaces/ICommercialUnitsSerpElementItem.md#title)

#### Defined in

main.ts:34366

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`type`](../interfaces/ICommercialUnitsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`xpath`](../interfaces/ICommercialUnitsSerpElementItem.md#xpath)

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

main.ts:34381

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

main.ts:34405

***

### fromJS()

> `static` **fromJS**(`data`): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34398
