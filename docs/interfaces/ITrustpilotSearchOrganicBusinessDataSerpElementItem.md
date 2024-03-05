[dataforseo-client](../README.md) / [Exports](../modules.md) / ITrustpilotSearchOrganicBusinessDataSerpElementItem

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

[main.ts:199187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199187)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

[main.ts:199183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199183)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:199180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199180)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Defined in

[main.ts:199193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199193)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

[main.ts:199191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199191)

___

### title

• `Optional` **title**: `string`

title of the establishment

#### Defined in

[main.ts:199185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199185)

___

### url

• `Optional` **url**: `string`

URL to the establishment

#### Defined in

[main.ts:199189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199189)
