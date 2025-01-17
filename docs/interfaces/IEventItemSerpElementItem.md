[**Documentation**](../README.md)

***

[Documentation](../README.md) / IEventItemSerpElementItem

# Interface: IEventItemSerpElementItem

Defined in: main.ts:49063

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:49067

description of the results element in SERP

***

### event\_dates?

> `optional` **event\_dates**: [`EventDates`](../classes/EventDates.md)

Defined in: main.ts:49074

dates when the event takes place
if there are none, equals null

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:49071

URL of the image featured in the element

***

### information\_and\_tickets?

> `optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](../classes/InformationAndTicketsElement.md)[]

Defined in: main.ts:49078

additional information and ticket purchase options

***

### location\_info?

> `optional` **location\_info**: [`LocationInfo`](../classes/LocationInfo.md)

Defined in: main.ts:49076

information about the event’s venue

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21404

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21400

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21397

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:49065

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21393

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:49069

search URL with refinement parameters

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21406

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)
