[Documentation](../README.md) / [Exports](../modules.md) / MapsPaidItemSerpElementItem

# Class: MapsPaidItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`MapsPaidItemSerpElementItem`**

## Implements

- [`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MapsPaidItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MapsPaidItemSerpElementItem.md#_discriminator)
- [domain](MapsPaidItemSerpElementItem.md#domain)
- [rank\_absolute](MapsPaidItemSerpElementItem.md#rank_absolute)
- [rank\_group](MapsPaidItemSerpElementItem.md#rank_group)
- [rating](MapsPaidItemSerpElementItem.md#rating)
- [rating\_distribution](MapsPaidItemSerpElementItem.md#rating_distribution)
- [title](MapsPaidItemSerpElementItem.md#title)
- [url](MapsPaidItemSerpElementItem.md#url)

### Methods

- [init](MapsPaidItemSerpElementItem.md#init)
- [toJSON](MapsPaidItemSerpElementItem.md#tojson)
- [fromJS](MapsPaidItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MapsPaidItemSerpElementItem**(`data?`): [`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md) |

#### Returns

[`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:39482

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### domain

• `Optional` **domain**: `string`

domain in the SERP element

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[domain](../interfaces/IMapsPaidItemSerpElementItem.md#domain)

#### Defined in

main.ts:39468

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[rank_absolute](../interfaces/IMapsPaidItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:39466

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[rank_group](../interfaces/IMapsPaidItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:39463

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[rating](../interfaces/IMapsPaidItemSerpElementItem.md#rating)

#### Defined in

main.ts:39475

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[rating_distribution](../interfaces/IMapsPaidItemSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:39478

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[title](../interfaces/IMapsPaidItemSerpElementItem.md#title)

#### Defined in

main.ts:39470

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IMapsPaidItemSerpElementItem](../interfaces/IMapsPaidItemSerpElementItem.md).[url](../interfaces/IMapsPaidItemSerpElementItem.md#url)

#### Defined in

main.ts:39472

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

main.ts:39487

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

main.ts:39517

___

### fromJS

▸ **fromJS**(`data`): [`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:39510
