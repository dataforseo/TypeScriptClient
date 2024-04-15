**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new EventItemSerpElementItem(data)

> **new EventItemSerpElementItem**(`data`?): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Parameters

• **data?**: [`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md)

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:45469

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`description`](../interfaces/IEventItemSerpElementItem.md#description)

#### Source

main.ts:45452

***

### event\_dates?

> **`optional`** **event\_dates**: [`EventDates`](EventDates.md)

dates when the event takes place
if there are none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`event_dates`](../interfaces/IEventItemSerpElementItem.md#event_dates)

#### Source

main.ts:45459

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image featured in the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`image_url`](../interfaces/IEventItemSerpElementItem.md#image_url)

#### Source

main.ts:45456

***

### information\_and\_tickets?

> **`optional`** **information\_and\_tickets**: [`InformationAndTicketsElement`](InformationAndTicketsElement.md)[]

additional information and ticket purchase options
if there is none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`information_and_tickets`](../interfaces/IEventItemSerpElementItem.md#information_and_tickets)

#### Source

main.ts:45465

***

### location\_info?

> **`optional`** **location\_info**: [`LocationInfo`](LocationInfo.md)

information about the event’s venue
if there is none, equals null

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`location_info`](../interfaces/IEventItemSerpElementItem.md#location_info)

#### Source

main.ts:45462

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`position`](../interfaces/IEventItemSerpElementItem.md#position)

#### Source

main.ts:45446

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`rank_absolute`](../interfaces/IEventItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:45442

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`rank_group`](../interfaces/IEventItemSerpElementItem.md#rank_group)

#### Source

main.ts:45439

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`title`](../interfaces/IEventItemSerpElementItem.md#title)

#### Source

main.ts:45450

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`url`](../interfaces/IEventItemSerpElementItem.md#url)

#### Source

main.ts:45454

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md).[`xpath`](../interfaces/IEventItemSerpElementItem.md#xpath)

#### Source

main.ts:45448

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

main.ts:45474

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

main.ts:45506

***

### fromJS()

> **`static`** **fromJS**(`data`): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:45499
