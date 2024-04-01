[Documentation](../README.md) / [Exports](../modules.md) / IEventItemSerpElementItem

# Interface: IEventItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IEventItemSerpElementItem`**

## Implemented by

- [`EventItemSerpElementItem`](../classes/EventItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IEventItemSerpElementItem.md#description)
- [event\_dates](IEventItemSerpElementItem.md#event_dates)
- [image\_url](IEventItemSerpElementItem.md#image_url)
- [information\_and\_tickets](IEventItemSerpElementItem.md#information_and_tickets)
- [location\_info](IEventItemSerpElementItem.md#location_info)
- [position](IEventItemSerpElementItem.md#position)
- [rank\_absolute](IEventItemSerpElementItem.md#rank_absolute)
- [rank\_group](IEventItemSerpElementItem.md#rank_group)
- [title](IEventItemSerpElementItem.md#title)
- [url](IEventItemSerpElementItem.md#url)
- [xpath](IEventItemSerpElementItem.md#xpath)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:45531

___

### event\_dates

• `Optional` **event\_dates**: [`EventDates`](../classes/EventDates.md)

dates when the event takes place
if there are none, equals null

#### Defined in

main.ts:45538

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image featured in the element

#### Defined in

main.ts:45535

___

### information\_and\_tickets

• `Optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](../classes/InformationAndTicketsElement.md)[]

additional information and ticket purchase options
if there is none, equals null

#### Defined in

main.ts:45544

___

### location\_info

• `Optional` **location\_info**: [`LocationInfo`](../classes/LocationInfo.md)

information about the event’s venue
if there is none, equals null

#### Defined in

main.ts:45541

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:45525

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:45521

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:45518

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:45529

___

### url

• `Optional` **url**: `string`

relevant URL

#### Defined in

main.ts:45533

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:45527
