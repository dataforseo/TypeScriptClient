[Documentation](../README.md) / [Exports](../modules.md) / IHotelReviewInfo

# Interface: IHotelReviewInfo

## Implemented by

- [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [mentions](IHotelReviewInfo.md#mentions)
- [other\_sites\_reviews](IHotelReviewInfo.md#other_sites_reviews)
- [rating\_distribution](IHotelReviewInfo.md#rating_distribution)
- [value](IHotelReviewInfo.md#value)
- [votes\_count](IHotelReviewInfo.md#votes_count)

## Properties

### mentions

• `Optional` **mentions**: [`ReviewMentionInfo`](../classes/ReviewMentionInfo.md)[]

hotel mentions
information about hotel reviews by criteria

#### Defined in

main.ts:196138

___

### other\_sites\_reviews

• `Optional` **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](../classes/OtherSitesReviewsInfo.md)[]

reviews on third-party sites
reviews from third-paty sites

#### Defined in

main.ts:196144

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:196141

___

### value

• `Optional` **value**: `number`

overall hotel rating based on customer votes

#### Defined in

main.ts:196132

___

### votes\_count

• `Optional` **votes\_count**: `number`

number of customer votes
the number of customer votes included in the calculation of the hotel rating

#### Defined in

main.ts:196135
