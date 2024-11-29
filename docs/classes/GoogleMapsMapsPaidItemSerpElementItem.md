[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleMapsMapsPaidItemSerpElementItem

# Class: GoogleMapsMapsPaidItemSerpElementItem

## Extends

- [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

## Implements

- [`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleMapsMapsPaidItemSerpElementItem()

> **new GoogleMapsMapsPaidItemSerpElementItem**(`data`?): [`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md)

#### Returns

[`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`constructor`](BaseGoogleMapsSerpElementItem.md#constructors)

#### Defined in

main.ts:41983

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`_discriminator`](BaseGoogleMapsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:41642

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`domain`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#domain)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`domain`](BaseGoogleMapsSerpElementItem.md#domain)

#### Defined in

main.ts:41630

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_absolute`](BaseGoogleMapsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:41628

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rank_group`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_group`](BaseGoogleMapsSerpElementItem.md#rank_group)

#### Defined in

main.ts:41625

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rating`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rating)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating`](BaseGoogleMapsSerpElementItem.md#rating)

#### Defined in

main.ts:41637

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#rating_distribution)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating_distribution`](BaseGoogleMapsSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:41640

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`title`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`title`](BaseGoogleMapsSerpElementItem.md#title)

#### Defined in

main.ts:41632

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`type`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`type`](BaseGoogleMapsSerpElementItem.md#type)

#### Defined in

main.ts:41621

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Implementation of

[`IGoogleMapsMapsPaidItemSerpElementItem`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md).[`url`](../interfaces/IGoogleMapsMapsPaidItemSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`url`](BaseGoogleMapsSerpElementItem.md#url)

#### Defined in

main.ts:41634

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`init`](BaseGoogleMapsSerpElementItem.md#init)

#### Defined in

main.ts:41988

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`toJSON`](BaseGoogleMapsSerpElementItem.md#tojson)

#### Defined in

main.ts:42005

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`fromJS`](BaseGoogleMapsSerpElementItem.md#fromjs)

#### Defined in

main.ts:41998
