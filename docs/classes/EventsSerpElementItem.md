**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / EventsSerpElementItem

# Class: EventsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventsSerpElementItem(data)

> **new EventsSerpElementItem**(`data`?): [`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Parameters

• **data?**: [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

#### Returns

[`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:31897

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### items?

> **`optional`** **items**: [`EventsElement`](EventsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`items`](../interfaces/IEventsSerpElementItem.md#items)

#### Source

main.ts:31889

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`position`](../interfaces/IEventsSerpElementItem.md#position)

#### Source

main.ts:31880

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rank_absolute`](../interfaces/IEventsSerpElementItem.md#rank_absolute)

#### Source

main.ts:31876

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rank_group`](../interfaces/IEventsSerpElementItem.md#rank_group)

#### Source

main.ts:31872

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rectangle`](../interfaces/IEventsSerpElementItem.md#rectangle)

#### Source

main.ts:31893

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`title`](../interfaces/IEventsSerpElementItem.md#title)

#### Source

main.ts:31884

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`url`](../interfaces/IEventsSerpElementItem.md#url)

#### Source

main.ts:31886

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`xpath`](../interfaces/IEventsSerpElementItem.md#xpath)

#### Source

main.ts:31882

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

main.ts:31902

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

main.ts:31931

***

### fromJS()

> **`static`** **fromJS**(`data`): [`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:31924
