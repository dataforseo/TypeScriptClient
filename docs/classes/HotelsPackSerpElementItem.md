**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelsPackSerpElementItem

# Class: HotelsPackSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelsPackSerpElementItem(data)

> **new HotelsPackSerpElementItem**(`data`?): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Parameters

• **data?**: [`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md)

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:34025

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`date_from`](../interfaces/IHotelsPackSerpElementItem.md#date_from)

#### Source

main.ts:34009

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`date_to`](../interfaces/IHotelsPackSerpElementItem.md#date_to)

#### Source

main.ts:34014

***

### items?

> **`optional`** **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`items`](../interfaces/IHotelsPackSerpElementItem.md#items)

#### Source

main.ts:34017

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`position`](../interfaces/IHotelsPackSerpElementItem.md#position)

#### Source

main.ts:34000

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rank_absolute`](../interfaces/IHotelsPackSerpElementItem.md#rank_absolute)

#### Source

main.ts:33996

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rank_group`](../interfaces/IHotelsPackSerpElementItem.md#rank_group)

#### Source

main.ts:33992

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rectangle`](../interfaces/IHotelsPackSerpElementItem.md#rectangle)

#### Source

main.ts:34021

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`title`](../interfaces/IHotelsPackSerpElementItem.md#title)

#### Source

main.ts:34004

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`xpath`](../interfaces/IHotelsPackSerpElementItem.md#xpath)

#### Source

main.ts:34002

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

main.ts:34030

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

main.ts:34060

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:34053
