[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisRatingInfo

# Class: ContentAnalysisRatingInfo

content rating rating related to content_info

## Implements

- [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisRatingInfo()

> **new ContentAnalysisRatingInfo**(`data`?): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Defined in

main.ts:170066

## Properties

### max\_rating\_value?

> `optional` **max\_rating\_value**: `string`

maximum value for the rating name

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`max_rating_value`](../interfaces/IContentAnalysisRatingInfo.md#max_rating_value)

#### Defined in

main.ts:170060

***

### name?

> `optional` **name**: `string`

rating name
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`name`](../interfaces/IContentAnalysisRatingInfo.md#name)

#### Defined in

main.ts:170054

***

### rating\_count?

> `optional` **rating\_count**: `number`

number of votes

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`rating_count`](../interfaces/IContentAnalysisRatingInfo.md#rating_count)

#### Defined in

main.ts:170058

***

### rating\_value?

> `optional` **rating\_value**: `number`

the value of the rating

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`rating_value`](../interfaces/IContentAnalysisRatingInfo.md#rating_value)

#### Defined in

main.ts:170056

***

### relative\_rating?

> `optional` **relative\_rating**: `number`

relative rating

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`relative_rating`](../interfaces/IContentAnalysisRatingInfo.md#relative_rating)

#### Defined in

main.ts:170062

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:170075

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:170096

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Defined in

main.ts:170089
