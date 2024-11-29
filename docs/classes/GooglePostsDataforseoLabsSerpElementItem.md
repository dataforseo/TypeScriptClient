[**Documentation**](../README.md)

***

[Documentation](../README.md) / GooglePostsDataforseoLabsSerpElementItem

# Class: GooglePostsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GooglePostsDataforseoLabsSerpElementItem()

> **new GooglePostsDataforseoLabsSerpElementItem**(`data`?): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:108127

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#cid)

#### Defined in

main.ts:108123

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`feature`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#feature)

#### Defined in

main.ts:108121

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### posts\_id?

> `optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`posts_id`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#posts_id)

#### Defined in

main.ts:108119

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:108132

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:108152

***

### fromJS()

> `static` **fromJS**(`data`): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:108145
