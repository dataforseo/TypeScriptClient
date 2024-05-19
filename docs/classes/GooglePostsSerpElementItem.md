**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GooglePostsSerpElementItem

# Class: GooglePostsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GooglePostsSerpElementItem(data)

> **new GooglePostsSerpElementItem**(`data`?): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Parameters

• **data?**: [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md)

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:35658

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`cid`](../interfaces/IGooglePostsSerpElementItem.md#cid)

#### Source

main.ts:35650

***

### feature?

> **`optional`** **feature**: `string`

the additional feature of the review

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`feature`](../interfaces/IGooglePostsSerpElementItem.md#feature)

#### Source

main.ts:35648

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`position`](../interfaces/IGooglePostsSerpElementItem.md#position)

#### Source

main.ts:35642

***

### posts\_id?

> **`optional`** **posts\_id**: `string`

the identifier of the google_posts feature

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`posts_id`](../interfaces/IGooglePostsSerpElementItem.md#posts_id)

#### Source

main.ts:35646

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`rank_absolute`](../interfaces/IGooglePostsSerpElementItem.md#rank_absolute)

#### Source

main.ts:35638

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`rank_group`](../interfaces/IGooglePostsSerpElementItem.md#rank_group)

#### Source

main.ts:35634

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`rectangle`](../interfaces/IGooglePostsSerpElementItem.md#rectangle)

#### Source

main.ts:35654

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`xpath`](../interfaces/IGooglePostsSerpElementItem.md#xpath)

#### Source

main.ts:35644

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:35663

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:35688

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35681
