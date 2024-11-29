[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleMapsMapsPaidItemSerpElementItem

# Interface: IGoogleMapsMapsPaidItemSerpElementItem

## Extends

- [`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`domain`](IBaseGoogleMapsSerpElementItem.md#domain)

#### Defined in

main.ts:41722

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_absolute`](IBaseGoogleMapsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:41720

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_group`](IBaseGoogleMapsSerpElementItem.md#rank_group)

#### Defined in

main.ts:41717

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating`](IBaseGoogleMapsSerpElementItem.md#rating)

#### Defined in

main.ts:41729

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating_distribution`](IBaseGoogleMapsSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:41732

***

### title?

> `optional` **title**: `string`

title of the element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`title`](IBaseGoogleMapsSerpElementItem.md#title)

#### Defined in

main.ts:41724

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`type`](IBaseGoogleMapsSerpElementItem.md#type)

#### Defined in

main.ts:41713

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`url`](IBaseGoogleMapsSerpElementItem.md#url)

#### Defined in

main.ts:41726
