[Documentation](../README.md) / [Exports](../modules.md) / IHotelsPackElement

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

main.ts:33210

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:33216

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

main.ts:33214

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

main.ts:33220

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Defined in

main.ts:33206

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:33223

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:33208

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:33204

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:33218
