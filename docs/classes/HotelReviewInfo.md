**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelReviewInfo

# Class: HotelReviewInfo

## Implements

- [`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelReviewInfo(data)

> **new HotelReviewInfo**(`data`?): [`HotelReviewInfo`](HotelReviewInfo.md)

#### Parameters

• **data?**: [`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md)

#### Returns

[`HotelReviewInfo`](HotelReviewInfo.md)

#### Source

main.ts:206065

## Properties

### mentions?

> **`optional`** **mentions**: [`ReviewMentionInfo`](ReviewMentionInfo.md)[]

hotel mentions
information about hotel reviews by criteria

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`mentions`](../interfaces/IHotelReviewInfo.md#mentions)

#### Source

main.ts:206055

***

### other\_sites\_reviews?

> **`optional`** **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)[]

reviews on third-party sites
reviews from third-paty sites

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`other_sites_reviews`](../interfaces/IHotelReviewInfo.md#other_sites_reviews)

#### Source

main.ts:206061

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`rating_distribution`](../interfaces/IHotelReviewInfo.md#rating_distribution)

#### Source

main.ts:206058

***

### value?

> **`optional`** **value**: `number`

overall hotel rating based on customer votes

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`value`](../interfaces/IHotelReviewInfo.md#value)

#### Source

main.ts:206049

***

### votes\_count?

> **`optional`** **votes\_count**: `number`

number of customer votes
the number of customer votes included in the calculation of the hotel rating

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`votes_count`](../interfaces/IHotelReviewInfo.md#votes_count)

#### Source

main.ts:206052

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:206074

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:206109

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelReviewInfo`](HotelReviewInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelReviewInfo`](HotelReviewInfo.md)

#### Source

main.ts:206102
