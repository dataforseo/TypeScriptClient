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

main.ts:35393

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`items`](../interfaces/ICommercialUnitsSerpElementItem.md#items)

#### Defined in

main.ts:35385

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`position`](../interfaces/ICommercialUnitsSerpElementItem.md#position)

#### Defined in

main.ts:35378

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_absolute`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:35374

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_group`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_group)

#### Defined in

main.ts:35370

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rectangle`](../interfaces/ICommercialUnitsSerpElementItem.md#rectangle)

#### Defined in

main.ts:35389

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`title`](../interfaces/ICommercialUnitsSerpElementItem.md#title)

#### Defined in

main.ts:35382

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`xpath`](../interfaces/ICommercialUnitsSerpElementItem.md#xpath)

#### Defined in

main.ts:35380

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

main.ts:35398

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

main.ts:35426

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

main.ts:35419
