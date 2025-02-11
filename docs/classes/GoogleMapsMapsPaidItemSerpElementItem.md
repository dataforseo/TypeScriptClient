[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleMapsMapsPaidItemSerpElementItem

# Class: GoogleMapsMapsPaidItemSerpElementItem

Defined in: main.ts:41995

## Extends

- [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

## Implements

- [`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleMapsMapsPaidItemSerpElementItem()

> **new GoogleMapsMapsPaidItemSerpElementItem**(`data`?): [`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

Defined in: main.ts:41999

#### Parameters

##### data?

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md)

#### Returns

[`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`constructor`](BaseGoogleMapsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:41658

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`_discriminator`](BaseGoogleMapsSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:41646

domain in SERP

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`domain`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#domain)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`domain`](BaseGoogleMapsSerpElementItem.md#domain)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:41644

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_absolute`](BaseGoogleMapsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:41641

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rank_group`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_group`](BaseGoogleMapsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:41653

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rating`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rating)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating`](BaseGoogleMapsSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:41656

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rating_distribution)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating_distribution`](BaseGoogleMapsSerpElementItem.md#rating_distribution)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:41648

title of the element

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`title`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`title`](BaseGoogleMapsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:41637

type of element

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`type`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`type`](BaseGoogleMapsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:41650

search URL with refinement parameters

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`url`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`url`](BaseGoogleMapsSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:42004

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`init`](BaseGoogleMapsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:42021

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`toJSON`](BaseGoogleMapsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

Defined in: main.ts:42014

#### Parameters

##### data

`any`

#### Returns

[`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`fromJS`](BaseGoogleMapsSerpElementItem.md#fromjs)
