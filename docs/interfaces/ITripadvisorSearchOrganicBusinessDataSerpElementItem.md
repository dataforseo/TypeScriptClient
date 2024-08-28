[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ITripadvisorSearchOrganicBusinessDataSerpElementItem

# Interface: ITripadvisorSearchOrganicBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

place category

#### Defined in

main.ts:217953

***

### is\_sponsored?

> `optional` **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Defined in

main.ts:217949

***

### price\_rate?

> `optional` **price\_rate**: `string`

average price rate

#### Defined in

main.ts:217955

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Defined in

main.ts:217940

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:217937

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Defined in

main.ts:217957

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:217951

***

### title?

> `optional` **title**: `string`

name of the business entity

#### Defined in

main.ts:217942

***

### url\_path?

> `optional` **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Defined in

main.ts:217946
