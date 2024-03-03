[Documentation](../README.md) / [Exports](../modules.md) / TripadvisorSearchOrganicBusinessDataSerpElementItem

# Class: TripadvisorSearchOrganicBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`TripadvisorSearchOrganicBusinessDataSerpElementItem`**

## Implements

- [`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#_discriminator)
- [category](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#category)
- [is\_sponsored](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#is_sponsored)
- [price\_rate](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#price_rate)
- [rank\_absolute](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_group)
- [rating](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#rating)
- [reviews\_count](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#reviews_count)
- [title](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#title)
- [url\_path](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#url_path)

### Methods

- [init](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#init)
- [toJSON](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#tojson)
- [fromJS](TripadvisorSearchOrganicBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TripadvisorSearchOrganicBusinessDataSerpElementItem**(`data?`): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md) |

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

main.ts:201513

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20076

___

### category

• `Optional` **category**: `string`

place category

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[category](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#category)

#### Defined in

main.ts:201505

___

### is\_sponsored

• `Optional` **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[is_sponsored](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#is_sponsored)

#### Defined in

main.ts:201501

___

### price\_rate

• `Optional` **price\_rate**: `string`

average price rate

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[price_rate](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#price_rate)

#### Defined in

main.ts:201507

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:201492

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[rank_group](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:201489

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[rating](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:201509

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[reviews_count](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

main.ts:201503

___

### title

• `Optional` **title**: `string`

name of the business entity

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[title](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:201494

___

### url\_path

• `Optional` **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Implementation of

[ITripadvisorSearchOrganicBusinessDataSerpElementItem](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[url_path](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#url_path)

#### Defined in

main.ts:201498

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:201518

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:201544

___

### fromJS

▸ **fromJS**(`data`): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:201537
