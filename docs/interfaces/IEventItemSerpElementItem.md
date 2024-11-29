[**Documentation**](../README.md)

***

[Documentation](../README.md) / IEventItemSerpElementItem

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

main.ts:49067

***

### event\_dates?

> `optional` **event\_dates**: [`EventDates`](../classes/EventDates.md)

dates when the event takes place
if there are none, equals null

#### Defined in

main.ts:49074

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image featured in the element

#### Defined in

main.ts:49071

***

### information\_and\_tickets?

> `optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](../classes/InformationAndTicketsElement.md)[]

additional information and ticket purchase options

#### Defined in

main.ts:49078

***

### location\_info?

> `optional` **location\_info**: [`LocationInfo`](../classes/LocationInfo.md)

information about the event’s venue

#### Defined in

main.ts:49076

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

#### Defined in

main.ts:21404

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21400

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21397

***

### title?

> `optional` **title**: `string`

title of the element

#### Defined in

main.ts:49065

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

#### Defined in

main.ts:21393

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Defined in

main.ts:49069

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21406
