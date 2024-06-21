**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / EventsDataforseoLabsSerpElementItem

# Class: EventsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventsDataforseoLabsSerpElementItem(data)

> **new EventsDataforseoLabsSerpElementItem**(`data`?): [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md)

#### Returns

[`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:99026

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`EventsElement`](EventsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:99022

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:99013

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:99009

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:99006

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:99017

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:99019

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:99015

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:99031

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:99059

***

### fromJS()

> **`static`** **fromJS**(`data`): [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:99052
