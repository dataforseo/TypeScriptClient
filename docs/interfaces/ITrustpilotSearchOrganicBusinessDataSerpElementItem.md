[Documentation](../README.md) / [Exports](../modules.md) / ITrustpilotSearchOrganicBusinessDataSerpElementItem

# Interface: ITrustpilotSearchOrganicBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

  ↳ **`ITrustpilotSearchOrganicBusinessDataSerpElementItem`**

## Implemented by

- [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](../classes/TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#domain)
- [rank\_absolute](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_group)
- [rating](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rating)
- [reviews\_count](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#reviews_count)
- [title](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#title)
- [url](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#url)

## Properties

### domain

• `Optional` **domain**: `string`

domain of the establishment

#### Defined in

main.ts:204648

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:204644

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:204641

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Defined in

main.ts:204654

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:204652

___

### title

• `Optional` **title**: `string`

title of the establishment

#### Defined in

main.ts:204646

___

### url

• `Optional` **url**: `string`

URL to the establishment

#### Defined in

main.ts:204650
