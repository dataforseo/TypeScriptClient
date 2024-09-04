[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HotelReviewInfo

# Class: HotelReviewInfo

## Implements

- [`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelReviewInfo()

> **new HotelReviewInfo**(`data`?): [`HotelReviewInfo`](HotelReviewInfo.md)

#### Parameters

• **data?**: [`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md)

#### Returns

[`HotelReviewInfo`](HotelReviewInfo.md)

#### Defined in

main.ts:210862

## Properties

### mentions?

> `optional` **mentions**: [`ReviewMentionInfo`](ReviewMentionInfo.md)[]

hotel mentions
information about hotel reviews by criteria

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`mentions`](../interfaces/IHotelReviewInfo.md#mentions)

#### Defined in

main.ts:210852

***

### other\_sites\_reviews?

> `optional` **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)[]

reviews on third-party sites
reviews from third-paty sites

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`other_sites_reviews`](../interfaces/IHotelReviewInfo.md#other_sites_reviews)

#### Defined in

main.ts:210858

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`rating_distribution`](../interfaces/IHotelReviewInfo.md#rating_distribution)

#### Defined in

main.ts:210855

***

### value?

> `optional` **value**: `number`

overall hotel rating based on customer votes

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`value`](../interfaces/IHotelReviewInfo.md#value)

#### Defined in

main.ts:210846

***

### votes\_count?

> `optional` **votes\_count**: `number`

number of customer votes
the number of customer votes included in the calculation of the hotel rating

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`votes_count`](../interfaces/IHotelReviewInfo.md#votes_count)

#### Defined in

main.ts:210849

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:210871

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:210906

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelReviewInfo`](HotelReviewInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelReviewInfo`](HotelReviewInfo.md)

#### Defined in

main.ts:210899
