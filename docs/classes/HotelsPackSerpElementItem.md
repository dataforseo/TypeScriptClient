[**Documentation**](../README.md) • **Docs**

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

### new HotelsPackSerpElementItem()

> **new HotelsPackSerpElementItem**(`data`?): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Parameters

• **data?**: [`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md)

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:35003

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`date_from`](../interfaces/IHotelsPackSerpElementItem.md#date_from)

#### Defined in

main.ts:34987

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`date_to`](../interfaces/IHotelsPackSerpElementItem.md#date_to)

#### Defined in

main.ts:34992

***

### items?

> `optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`items`](../interfaces/IHotelsPackSerpElementItem.md#items)

#### Defined in

main.ts:34995

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`position`](../interfaces/IHotelsPackSerpElementItem.md#position)

#### Defined in

main.ts:34978

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rank_absolute`](../interfaces/IHotelsPackSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:34974

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rank_group`](../interfaces/IHotelsPackSerpElementItem.md#rank_group)

#### Defined in

main.ts:34970

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rectangle`](../interfaces/IHotelsPackSerpElementItem.md#rectangle)

#### Defined in

main.ts:34999

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`title`](../interfaces/IHotelsPackSerpElementItem.md#title)

#### Defined in

main.ts:34982

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`xpath`](../interfaces/IHotelsPackSerpElementItem.md#xpath)

#### Defined in

main.ts:34980

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

main.ts:35008

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

main.ts:35038

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35031
