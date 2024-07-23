**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IEventItemSerpElementItem

# Interface: IEventItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:47457

***

### event\_dates?

> **`optional`** **event\_dates**: [`EventDates`](../classes/EventDates.md)

dates when the event takes place
if there are none, equals null

#### Source

main.ts:47464

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image featured in the element

#### Source

main.ts:47461

***

### information\_and\_tickets?

> **`optional`** **information\_and\_tickets**: [`InformationAndTicketsElement`](../classes/InformationAndTicketsElement.md)[]

additional information and ticket purchase options
if there is none, equals null

#### Source

main.ts:47470

***

### location\_info?

> **`optional`** **location\_info**: [`LocationInfo`](../classes/LocationInfo.md)

information about the event’s venue
if there is none, equals null

#### Source

main.ts:47467

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:47451

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:47447

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:47444

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:47455

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Source

main.ts:47459

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:47453
