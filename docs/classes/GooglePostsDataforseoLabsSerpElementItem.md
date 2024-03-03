[Documentation](../README.md) / [Exports](../modules.md) / GooglePostsDataforseoLabsSerpElementItem

# Class: GooglePostsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`GooglePostsDataforseoLabsSerpElementItem`**

## Implements

- [`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GooglePostsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GooglePostsDataforseoLabsSerpElementItem.md#_discriminator)
- [cid](GooglePostsDataforseoLabsSerpElementItem.md#cid)
- [feature](GooglePostsDataforseoLabsSerpElementItem.md#feature)
- [position](GooglePostsDataforseoLabsSerpElementItem.md#position)
- [posts\_id](GooglePostsDataforseoLabsSerpElementItem.md#posts_id)
- [rank\_absolute](GooglePostsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](GooglePostsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](GooglePostsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](GooglePostsDataforseoLabsSerpElementItem.md#init)
- [toJSON](GooglePostsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](GooglePostsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GooglePostsDataforseoLabsSerpElementItem**(`data?`): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md) |

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:94525

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[cid](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#cid)

#### Defined in

main.ts:94521

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[feature](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#feature)

#### Defined in

main.ts:94519

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[position](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:94513

___

### posts\_id

• `Optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[posts_id](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#posts_id)

#### Defined in

main.ts:94517

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:94509

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:94506

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGooglePostsDataforseoLabsSerpElementItem](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:94515

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:94530

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:94554

___

### fromJS

▸ **fromJS**(`data`): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:94547
