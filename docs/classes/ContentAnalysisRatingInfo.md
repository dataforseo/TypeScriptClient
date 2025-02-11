[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisRatingInfo

# Class: ContentAnalysisRatingInfo

Defined in: main.ts:178034

## Implements

- [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisRatingInfo()

> **new ContentAnalysisRatingInfo**(`data`?): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

Defined in: main.ts:178049

#### Parameters

##### data?

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

## Properties

### max\_rating\_value?

> `optional` **max\_rating\_value**: `number`

Defined in: main.ts:178041

maximum value for the rating name

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`max_rating_value`](../interfaces/IContentAnalysisRatingInfo.md#max_rating_value)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:178037

rating name
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`name`](../interfaces/IContentAnalysisRatingInfo.md#name)

***

### rating\_count?

> `optional` **rating\_count**: `number`

Defined in: main.ts:178043

number of votes

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`rating_count`](../interfaces/IContentAnalysisRatingInfo.md#rating_count)

***

### rating\_value?

> `optional` **rating\_value**: `number`

Defined in: main.ts:178039

the value of the rating

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`rating_value`](../interfaces/IContentAnalysisRatingInfo.md#rating_value)

***

### relative\_rating?

> `optional` **relative\_rating**: `number`

Defined in: main.ts:178045

relative rating

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`relative_rating`](../interfaces/IContentAnalysisRatingInfo.md#relative_rating)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178058

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:178079

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

Defined in: main.ts:178072

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)
