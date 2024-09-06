[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IEventItemSerpElementItem

# Interface: IEventItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:46254

***

### event\_dates?

> `optional` **event\_dates**: [`EventDates`](../classes/EventDates.md)

dates when the event takes place
if there are none, equals null

#### Defined in

main.ts:46261

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image featured in the element

#### Defined in

main.ts:46258

***

### information\_and\_tickets?

> `optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](../classes/InformationAndTicketsElement.md)[]

additional information and ticket purchase options
if there is none, equals null

#### Defined in

main.ts:46267

***

### location\_info?

> `optional` **location\_info**: [`LocationInfo`](../classes/LocationInfo.md)

information about the event’s venue
if there is none, equals null

#### Defined in

main.ts:46264

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

#### Defined in

main.ts:20726

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20722

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20719

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:46252

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

#### Defined in

main.ts:20715

***

### url?

> `optional` **url**: `string`

relevant URL

#### Defined in

main.ts:46256

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20728
