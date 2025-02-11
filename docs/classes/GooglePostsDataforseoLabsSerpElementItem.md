[**Documentation**](../README.md)

***

[Documentation](../README.md) / GooglePostsDataforseoLabsSerpElementItem

# Class: GooglePostsDataforseoLabsSerpElementItem

Defined in: main.ts:108241

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GooglePostsDataforseoLabsSerpElementItem()

> **new GooglePostsDataforseoLabsSerpElementItem**(`data`?): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:108251

#### Parameters

##### data?

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:108247

google-defined client id

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#cid)

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:108245

the additional feature of the review

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`feature`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#feature)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### posts\_id?

> `optional` **posts\_id**: `string`

Defined in: main.ts:108243

the identifier of the google_posts feature

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`posts_id`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#posts_id)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:108256

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:108276

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:108269

#### Parameters

##### data

`any`

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
