[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleNewsNewsSearchSerpElementItem

# Class: GoogleNewsNewsSearchSerpElementItem

## Extends

- [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

## Implements

- [`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleNewsNewsSearchSerpElementItem()

> **new GoogleNewsNewsSearchSerpElementItem**(`data`?): [`GoogleNewsNewsSearchSerpElementItem`](GoogleNewsNewsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md)

#### Returns

[`GoogleNewsNewsSearchSerpElementItem`](GoogleNewsNewsSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`constructor`](BaseGoogleNewsSerpElementItem.md#constructors)

#### Defined in

main.ts:43957

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`_discriminator`](BaseGoogleNewsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:43864

***

### domain?

> `optional` **domain**: `string`

domain name of the result in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`domain`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#domain)

#### Defined in

main.ts:43939

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`image_url`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#image_url)

#### Defined in

main.ts:43944

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_absolute`](BaseGoogleNewsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:43854

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_group`](BaseGoogleNewsSerpElementItem.md#rank_group)

#### Defined in

main.ts:43851

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rectangle`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rectangle)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rectangle`](BaseGoogleNewsSerpElementItem.md#rectangle)

#### Defined in

main.ts:43862

***

### snippet?

> `optional` **snippet**: `string`

snippet of the result in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`snippet`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#snippet)

#### Defined in

main.ts:43946

***

### time\_published?

> `optional` **time\_published**: `string`

indicates the time the result was published

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`time_published`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#time_published)

#### Defined in

main.ts:43948

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#timestamp)

#### Defined in

main.ts:43953

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`title`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`title`](BaseGoogleNewsSerpElementItem.md#title)

#### Defined in

main.ts:43858

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`type`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`type`](BaseGoogleNewsSerpElementItem.md#type)

#### Defined in

main.ts:43847

***

### url?

> `optional` **url**: `string`

URL of the result in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`url`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#url)

#### Defined in

main.ts:43941

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`xpath`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`xpath`](BaseGoogleNewsSerpElementItem.md#xpath)

#### Defined in

main.ts:43856

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`init`](BaseGoogleNewsSerpElementItem.md#init)

#### Defined in

main.ts:43962

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`toJSON`](BaseGoogleNewsSerpElementItem.md#tojson)

#### Defined in

main.ts:43985

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleNewsNewsSearchSerpElementItem`](GoogleNewsNewsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleNewsNewsSearchSerpElementItem`](GoogleNewsNewsSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`fromJS`](BaseGoogleNewsSerpElementItem.md#fromjs)

#### Defined in

main.ts:43978
