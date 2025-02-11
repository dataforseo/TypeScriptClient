[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleMapsSerpElementItem

# Class: BaseGoogleMapsSerpElementItem

Defined in: main.ts:41635

## Extended by

- [`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)
- [`GoogleMapsMapsPaidItemSerpElementItem`](GoogleMapsMapsPaidItemSerpElementItem.md)

## Implements

- [`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md)

## Constructors

### new BaseGoogleMapsSerpElementItem()

> **new BaseGoogleMapsSerpElementItem**(`data`?): [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

Defined in: main.ts:41660

#### Parameters

##### data?

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md)

#### Returns

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:41658

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:41646

domain in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`domain`](../interfaces/IBaseGoogleMapsSerpElementItem.md#domain)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:41644

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:41641

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:41653

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rating`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:41656

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`rating_distribution`](../interfaces/IBaseGoogleMapsSerpElementItem.md#rating_distribution)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:41648

title of the element

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`title`](../interfaces/IBaseGoogleMapsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:41637

type of element

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`type`](../interfaces/IBaseGoogleMapsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:41650

search URL with refinement parameters

#### Implementation of

[`IBaseGoogleMapsSerpElementItem`](../interfaces/IBaseGoogleMapsSerpElementItem.md).[`url`](../interfaces/IBaseGoogleMapsSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:41670

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:41706

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

Defined in: main.ts:41689

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)
