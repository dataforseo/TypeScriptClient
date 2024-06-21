**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelReviewInfo

# Interface: IHotelReviewInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### mentions?

> **`optional`** **mentions**: [`ReviewMentionInfo`](../classes/ReviewMentionInfo.md)[]

hotel mentions
information about hotel reviews by criteria

#### Source

main.ts:205622

***

### other\_sites\_reviews?

> **`optional`** **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](../classes/OtherSitesReviewsInfo.md)[]

reviews on third-party sites
reviews from third-paty sites

#### Source

main.ts:205628

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:205625

***

### value?

> **`optional`** **value**: `number`

overall hotel rating based on customer votes

#### Source

main.ts:205616

***

### votes\_count?

> **`optional`** **votes\_count**: `number`

number of customer votes
the number of customer votes included in the calculation of the hotel rating

#### Source

main.ts:205619
