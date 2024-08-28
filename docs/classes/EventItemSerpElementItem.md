[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / EventItemSerpElementItem

# Class: EventItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventItemSerpElementItem()

> **new EventItemSerpElementItem**(`data`?): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Parameters

• **data?**: [`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md)

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:47909

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`description`](../interfaces/IEventItemSerpElementItem.md#description)

#### Defined in

main.ts:47892

***

### event\_dates?

> `optional` **event\_dates**: [`EventDates`](EventDates.md)

dates when the event takes place
if there are none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`event_dates`](../interfaces/IEventItemSerpElementItem.md#event_dates)

#### Defined in

main.ts:47899

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image featured in the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`image_url`](../interfaces/IEventItemSerpElementItem.md#image_url)

#### Defined in

main.ts:47896

***

### information\_and\_tickets?

> `optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](InformationAndTicketsElement.md)[]

additional information and ticket purchase options
if there is none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`information_and_tickets`](../interfaces/IEventItemSerpElementItem.md#information_and_tickets)

#### Defined in

main.ts:47905

***

### location\_info?

> `optional` **location\_info**: [`LocationInfo`](LocationInfo.md)

information about the event’s venue
if there is none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`location_info`](../interfaces/IEventItemSerpElementItem.md#location_info)

#### Defined in

main.ts:47902

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`position`](../interfaces/IEventItemSerpElementItem.md#position)

#### Defined in

main.ts:47886

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`rank_absolute`](../interfaces/IEventItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:47882

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`rank_group`](../interfaces/IEventItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:47879

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`title`](../interfaces/IEventItemSerpElementItem.md#title)

#### Defined in

main.ts:47890

***

### url?

> `optional` **url**: `string`

relevant URL

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`url`](../interfaces/IEventItemSerpElementItem.md#url)

#### Defined in

main.ts:47894

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`xpath`](../interfaces/IEventItemSerpElementItem.md#xpath)

#### Defined in

main.ts:47888

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

main.ts:47914

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

main.ts:47946

***

### fromJS()

> `static` **fromJS**(`data`): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:47939
