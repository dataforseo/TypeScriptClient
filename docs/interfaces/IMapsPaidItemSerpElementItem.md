[Documentation](../README.md) / [Exports](../modules.md) / IMapsPaidItemSerpElementItem

# Interface: IMapsPaidItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IMapsPaidItemSerpElementItem`**

## Implemented by

- [`MapsPaidItemSerpElementItem`](../classes/MapsPaidItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IMapsPaidItemSerpElementItem.md#domain)
- [rank\_absolute](IMapsPaidItemSerpElementItem.md#rank_absolute)
- [rank\_group](IMapsPaidItemSerpElementItem.md#rank_group)
- [rating](IMapsPaidItemSerpElementItem.md#rating)
- [rating\_distribution](IMapsPaidItemSerpElementItem.md#rating_distribution)
- [title](IMapsPaidItemSerpElementItem.md#title)
- [url](IMapsPaidItemSerpElementItem.md#url)

## Properties

### domain

• `Optional` **domain**: `string`

domain in the SERP element

#### Defined in

main.ts:39550

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:39548

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:39545

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:39557

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:39560

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:39552

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:39554
