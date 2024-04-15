**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITripadvisorSearchOrganicBusinessDataSerpElementItem

# Interface: ITripadvisorSearchOrganicBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> **`optional`** **category**: `string`

place category

#### Source

main.ts:207074

***

### is\_sponsored?

> **`optional`** **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Source

main.ts:207070

***

### price\_rate?

> **`optional`** **price\_rate**: `string`

average price rate

#### Source

main.ts:207076

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Source

main.ts:207061

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:207058

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Source

main.ts:207078

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Source

main.ts:207072

***

### title?

> **`optional`** **title**: `string`

name of the business entity

#### Source

main.ts:207063

***

### url\_path?

> **`optional`** **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Source

main.ts:207067
