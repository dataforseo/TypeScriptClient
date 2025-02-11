[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleMapsMapsPaidItemSerpElementItem

# Interface: IGoogleMapsMapsPaidItemSerpElementItem

Defined in: main.ts:42032

## Extends

- [`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:41738

domain in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`domain`](IBaseGoogleMapsSerpElementItem.md#domain)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:41736

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_absolute`](IBaseGoogleMapsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:41733

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_group`](IBaseGoogleMapsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:41745

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating`](IBaseGoogleMapsSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:41748

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating_distribution`](IBaseGoogleMapsSerpElementItem.md#rating_distribution)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:41740

title of the element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`title`](IBaseGoogleMapsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:41729

type of element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`type`](IBaseGoogleMapsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:41742

search URL with refinement parameters

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`url`](IBaseGoogleMapsSerpElementItem.md#url)
