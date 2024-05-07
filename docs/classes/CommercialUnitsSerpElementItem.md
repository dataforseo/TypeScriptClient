**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CommercialUnitsSerpElementItem

# Class: CommercialUnitsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsSerpElementItem(data)

> **new CommercialUnitsSerpElementItem**(`data`?): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Parameters

• **data?**: [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:34719

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### items?

> **`optional`** **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`items`](../interfaces/ICommercialUnitsSerpElementItem.md#items)

#### Source

main.ts:34711

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`position`](../interfaces/ICommercialUnitsSerpElementItem.md#position)

#### Source

main.ts:34704

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_absolute`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_absolute)

#### Source

main.ts:34700

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_group`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_group)

#### Source

main.ts:34696

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rectangle`](../interfaces/ICommercialUnitsSerpElementItem.md#rectangle)

#### Source

main.ts:34715

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`title`](../interfaces/ICommercialUnitsSerpElementItem.md#title)

#### Source

main.ts:34708

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`xpath`](../interfaces/ICommercialUnitsSerpElementItem.md#xpath)

#### Source

main.ts:34706

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

main.ts:34724

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

main.ts:34752

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:34745
