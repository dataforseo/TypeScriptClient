[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleReviewsSerpElementItem

# Class: GoogleReviewsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`GoogleReviewsSerpElementItem`**

## Implements

- [`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleReviewsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleReviewsSerpElementItem.md#_discriminator)
- [cid](GoogleReviewsSerpElementItem.md#cid)
- [feature](GoogleReviewsSerpElementItem.md#feature)
- [place\_id](GoogleReviewsSerpElementItem.md#place_id)
- [position](GoogleReviewsSerpElementItem.md#position)
- [rank\_absolute](GoogleReviewsSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleReviewsSerpElementItem.md#rank_group)
- [rating](GoogleReviewsSerpElementItem.md#rating)
- [rectangle](GoogleReviewsSerpElementItem.md#rectangle)
- [reviews\_count](GoogleReviewsSerpElementItem.md#reviews_count)
- [xpath](GoogleReviewsSerpElementItem.md#xpath)

### Methods

- [init](GoogleReviewsSerpElementItem.md#init)
- [toJSON](GoogleReviewsSerpElementItem.md#tojson)
- [fromJS](GoogleReviewsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleReviewsSerpElementItem**(`data?`): [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md) |

#### Returns

[`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:29206](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29206)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[cid](../interfaces/IGoogleReviewsSerpElementItem.md#cid)

#### Defined in

[main.ts:29198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29198)

___


### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[feature](../interfaces/IGoogleReviewsSerpElementItem.md#feature)

#### Defined in

[main.ts:29196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29196)

___


### place\_id

• `Optional` **place\_id**: `string`

the identifier of a place

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[place_id](../interfaces/IGoogleReviewsSerpElementItem.md#place_id)

#### Defined in

[main.ts:29194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29194)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[position](../interfaces/IGoogleReviewsSerpElementItem.md#position)

#### Defined in

[main.ts:29185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29185)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[rank_absolute](../interfaces/IGoogleReviewsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:29181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29181)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[rank_group](../interfaces/IGoogleReviewsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:29178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29178)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[rating](../interfaces/IGoogleReviewsSerpElementItem.md#rating)

#### Defined in

[main.ts:29192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29192)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[rectangle](../interfaces/IGoogleReviewsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:29202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29202)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the number of reviews

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[reviews_count](../interfaces/IGoogleReviewsSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:29189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29189)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleReviewsSerpElementItem](../interfaces/IGoogleReviewsSerpElementItem.md).[xpath](../interfaces/IGoogleReviewsSerpElementItem.md#xpath)

#### Defined in

[main.ts:29187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29187)

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

[main.ts:29211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29211)

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

[main.ts:29238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29238)

___


### fromJS

▸ **fromJS**(`data`): [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:29231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29231)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")