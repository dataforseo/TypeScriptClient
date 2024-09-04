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

main.ts:215665

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:215661

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:215658

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Defined in

main.ts:215671

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:215669

***

### title?

> `optional` **title**: `string`

title of the establishment

#### Defined in

main.ts:215663

***

### url?

> `optional` **url**: `string`

URL to the establishment

#### Defined in

main.ts:215667
