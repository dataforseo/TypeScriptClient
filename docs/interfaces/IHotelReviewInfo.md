[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IHotelReviewInfo

# Interface: IHotelReviewInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### mentions?

> `optional` **mentions**: [`ReviewMentionInfo`](../classes/ReviewMentionInfo.md)[]

hotel mentions
information about hotel reviews by criteria

#### Defined in

main.ts:206281

***

### other\_sites\_reviews?

> `optional` **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](../classes/OtherSitesReviewsInfo.md)[]

reviews on third-party sites
reviews from third-paty sites

#### Defined in

main.ts:206287

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:206284

***

### value?

> `optional` **value**: `number`

overall hotel rating based on customer votes

#### Defined in

main.ts:206275

***

### votes\_count?

> `optional` **votes\_count**: `number`

number of customer votes
the number of customer votes included in the calculation of the hotel rating

#### Defined in

main.ts:206278
