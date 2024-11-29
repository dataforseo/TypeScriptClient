[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleNewsTopStoriesSerpElementItem

# Class: GoogleNewsTopStoriesSerpElementItem

## Extends

- [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

## Implements

- [`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleNewsTopStoriesSerpElementItem()

> **new GoogleNewsTopStoriesSerpElementItem**(`data`?): [`GoogleNewsTopStoriesSerpElementItem`](GoogleNewsTopStoriesSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md)

#### Returns

[`GoogleNewsTopStoriesSerpElementItem`](GoogleNewsTopStoriesSerpElementItem.md)

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`constructor`](BaseGoogleNewsSerpElementItem.md#constructors)

#### Defined in

main.ts:46311

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`_discriminator`](BaseGoogleNewsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:46142

***

### items?

> `optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

items of the element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`items`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#items)

#### Defined in

main.ts:46307

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`position`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#position)

#### Defined in

main.ts:46305

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_absolute`](BaseGoogleNewsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:46132

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`rank_group`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_group`](BaseGoogleNewsSerpElementItem.md#rank_group)

#### Defined in

main.ts:46129

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`rectangle`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#rectangle)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rectangle`](BaseGoogleNewsSerpElementItem.md#rectangle)

#### Defined in

main.ts:46140

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`title`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`title`](BaseGoogleNewsSerpElementItem.md#title)

#### Defined in

main.ts:46136

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`type`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`type`](BaseGoogleNewsSerpElementItem.md#type)

#### Defined in

main.ts:46125

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`xpath`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`xpath`](BaseGoogleNewsSerpElementItem.md#xpath)

#### Defined in

main.ts:46134

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`init`](BaseGoogleNewsSerpElementItem.md#init)

#### Defined in

main.ts:46316

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`toJSON`](BaseGoogleNewsSerpElementItem.md#tojson)

#### Defined in

main.ts:46339

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleNewsTopStoriesSerpElementItem`](GoogleNewsTopStoriesSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleNewsTopStoriesSerpElementItem`](GoogleNewsTopStoriesSerpElementItem.md)

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`fromJS`](BaseGoogleNewsSerpElementItem.md#fromjs)

#### Defined in

main.ts:46332
