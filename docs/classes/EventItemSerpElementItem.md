[**Documentation**](../README.md)

***

[Documentation](../README.md) / EventItemSerpElementItem

# Class: EventItemSerpElementItem

Defined in: main.ts:49005

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new EventItemSerpElementItem()

> **new EventItemSerpElementItem**(`data`?): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

Defined in: main.ts:49024

#### Parameters

##### data?

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md)

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:49009

description of the results element in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`description`](../interfaces/IEventItemSerpElementItem.md#description)

***

### event\_dates?

> `optional` **event\_dates**: [`EventDates`](EventDates.md)

Defined in: main.ts:49016

dates when the event takes place
if there are none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`event_dates`](../interfaces/IEventItemSerpElementItem.md#event_dates)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:49013

URL of the image featured in the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`image_url`](../interfaces/IEventItemSerpElementItem.md#image_url)

***

### information\_and\_tickets?

> `optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](InformationAndTicketsElement.md)[]

Defined in: main.ts:49020

additional information and ticket purchase options

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`information_and_tickets`](../interfaces/IEventItemSerpElementItem.md#information_and_tickets)

***

### location\_info?

> `optional` **location\_info**: [`LocationInfo`](LocationInfo.md)

Defined in: main.ts:49018

information about the event’s venue

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`location_info`](../interfaces/IEventItemSerpElementItem.md#location_info)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`position`](../interfaces/IEventItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`rank_absolute`](../interfaces/IEventItemSerpElementItem.md#rank_absolute)

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

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`rank_group`](../interfaces/IEventItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:49007

title of the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`title`](../interfaces/IEventItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`type`](../interfaces/IEventItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:49011

search URL with refinement parameters

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`url`](../interfaces/IEventItemSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`xpath`](../interfaces/IEventItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:49029

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

Defined in: main.ts:49057

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

Defined in: main.ts:49050

#### Parameters

##### data

`any`

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
