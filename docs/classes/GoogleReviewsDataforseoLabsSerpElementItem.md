[Documentation](../README.md) / [Exports](../modules.md) / GoogleReviewsDataforseoLabsSerpElementItem

# Class: GoogleReviewsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`GoogleReviewsDataforseoLabsSerpElementItem`**

## Implements

- [`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleReviewsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleReviewsDataforseoLabsSerpElementItem.md#_discriminator)
- [cid](GoogleReviewsDataforseoLabsSerpElementItem.md#cid)
- [feature](GoogleReviewsDataforseoLabsSerpElementItem.md#feature)
- [place\_id](GoogleReviewsDataforseoLabsSerpElementItem.md#place_id)
- [position](GoogleReviewsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](GoogleReviewsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleReviewsDataforseoLabsSerpElementItem.md#rank_group)
- [rating](GoogleReviewsDataforseoLabsSerpElementItem.md#rating)
- [reviews\_count](GoogleReviewsDataforseoLabsSerpElementItem.md#reviews_count)
- [xpath](GoogleReviewsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](GoogleReviewsDataforseoLabsSerpElementItem.md#init)
- [toJSON](GoogleReviewsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](GoogleReviewsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleReviewsDataforseoLabsSerpElementItem**(`data?`): [`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md) |

#### Returns

[`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:94424

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

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[cid](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#cid)

#### Defined in

main.ts:94420

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[feature](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#feature)

#### Defined in

main.ts:94418

___

### place\_id

• `Optional` **place\_id**: `string`

the identifier of a place

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[place_id](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#place_id)

#### Defined in

main.ts:94416

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[position](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:94407

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:94403

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:94400

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[rating](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rating)

#### Defined in

main.ts:94414

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the number of reviews

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[reviews_count](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#reviews_count)

#### Defined in

main.ts:94411

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleReviewsDataforseoLabsSerpElementItem](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:94409

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

main.ts:94429

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

main.ts:94455

___

### fromJS

▸ **fromJS**(`data`): [`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:94448
