**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITrustpilotSearchOrganicBusinessDataSerpElementItem

# Interface: ITrustpilotSearchOrganicBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain of the establishment

#### Source

main.ts:204798

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:204794

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:204791

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Source

main.ts:204804

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Source

main.ts:204802

***

### title?

> **`optional`** **title**: `string`

title of the establishment

#### Source

main.ts:204796

***

### url?

> **`optional`** **url**: `string`

URL to the establishment

#### Source

main.ts:204800
