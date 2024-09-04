[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ITrustpilotSearchOrganicBusinessDataSerpElementItem

# Interface: ITrustpilotSearchOrganicBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain of the establishment

#### Defined in

main.ts:210971

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21392

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21390

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Defined in

main.ts:210977

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:210975

***

### title?

> `optional` **title**: `string`

title of the establishment

#### Defined in

main.ts:210969

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:21387

***

### url?

> `optional` **url**: `string`

URL to the establishment

#### Defined in

main.ts:210973
