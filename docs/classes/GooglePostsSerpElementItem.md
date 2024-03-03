[Documentation](../README.md) / [Exports](../modules.md) / GooglePostsSerpElementItem

# Class: GooglePostsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`GooglePostsSerpElementItem`**

## Implements

- [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GooglePostsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GooglePostsSerpElementItem.md#_discriminator)
- [cid](GooglePostsSerpElementItem.md#cid)
- [feature](GooglePostsSerpElementItem.md#feature)
- [position](GooglePostsSerpElementItem.md#position)
- [posts\_id](GooglePostsSerpElementItem.md#posts_id)
- [rank\_absolute](GooglePostsSerpElementItem.md#rank_absolute)
- [rank\_group](GooglePostsSerpElementItem.md#rank_group)
- [rectangle](GooglePostsSerpElementItem.md#rectangle)
- [xpath](GooglePostsSerpElementItem.md#xpath)

### Methods

- [init](GooglePostsSerpElementItem.md#init)
- [toJSON](GooglePostsSerpElementItem.md#tojson)
- [fromJS](GooglePostsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GooglePostsSerpElementItem**(`data?`): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md) |

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:34475

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[cid](../interfaces/IGooglePostsSerpElementItem.md#cid)

#### Defined in

main.ts:34467

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[feature](../interfaces/IGooglePostsSerpElementItem.md#feature)

#### Defined in

main.ts:34465

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[position](../interfaces/IGooglePostsSerpElementItem.md#position)

#### Defined in

main.ts:34459

___

### posts\_id

• `Optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[posts_id](../interfaces/IGooglePostsSerpElementItem.md#posts_id)

#### Defined in

main.ts:34463

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[rank_absolute](../interfaces/IGooglePostsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:34455

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[rank_group](../interfaces/IGooglePostsSerpElementItem.md#rank_group)

#### Defined in

main.ts:34452

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[rectangle](../interfaces/IGooglePostsSerpElementItem.md#rectangle)

#### Defined in

main.ts:34471

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[xpath](../interfaces/IGooglePostsSerpElementItem.md#xpath)

#### Defined in

main.ts:34461

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:34480

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:34505

___

### fromJS

▸ **fromJS**(`data`): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34498
