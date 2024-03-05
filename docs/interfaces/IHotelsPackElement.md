[dataforseo-client](../README.md) / [Exports](../modules.md) / IHotelsPackElement

# Interface: IHotelsPackElement

## Implemented by

- [`HotelsPackElement`](../classes/HotelsPackElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IHotelsPackElement.md#description)
- [domain](IHotelsPackElement.md#domain)
- [hotel\_identifier](IHotelsPackElement.md#hotel_identifier)
- [is\_paid](IHotelsPackElement.md#is_paid)
- [price](IHotelsPackElement.md#price)
- [rating](IHotelsPackElement.md#rating)
- [title](IHotelsPackElement.md#title)
- [type](IHotelsPackElement.md#type)
- [url](IHotelsPackElement.md#url)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

[main.ts:33068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33068)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

[main.ts:33074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33074)

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

[main.ts:33072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33072)

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

[main.ts:33078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33078)

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Defined in

[main.ts:33064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33064)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:33081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33081)

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

[main.ts:33066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33066)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:33062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33062)

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:33076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33076)
