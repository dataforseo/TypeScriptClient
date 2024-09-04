[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseGoogleMapsSerpElementItem

# Class: BaseGoogleMapsSerpElementItem

## Extended by

- [`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)
- [`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

## Implements

- [`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md)

## Constructors

### new BaseGoogleMapsSerpElementItem()

> **new BaseGoogleMapsSerpElementItem**(`data`?): [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md)

#### Returns

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

#### Defined in

main.ts:39802

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:39800

***

### domain?

> `optional` **domain**: `string`

domain in the SERP element

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`domain`](../interfaces/IBaseGoogleMapsSerpElementItem.md#domain)

#### Defined in

main.ts:39788

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:39786

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rank_group)

#### Defined in

main.ts:39783

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rating`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rating)

#### Defined in

main.ts:39795

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rating_distribution`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:39798

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`title`](../interfaces/IBaseGoogleMapsSerpElementItem.md#title)

#### Defined in

main.ts:39790

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`type`](../interfaces/IBaseGoogleMapsSerpElementItem.md#type)

#### Defined in

main.ts:39779

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`url`](../interfaces/IBaseGoogleMapsSerpElementItem.md#url)

#### Defined in

main.ts:39792

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:39812

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:39848

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

#### Defined in

main.ts:39831
