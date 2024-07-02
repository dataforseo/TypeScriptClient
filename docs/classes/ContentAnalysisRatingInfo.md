**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisRatingInfo

# Class: ContentAnalysisRatingInfo

content rating rating related to content_info

## Implements

- [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisRatingInfo(data)

> **new ContentAnalysisRatingInfo**(`data`?): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Source

main.ts:165541

## Properties

### max\_rating\_value?

> **`optional`** **max\_rating\_value**: `string`

maximum value for the rating name

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`max_rating_value`](../interfaces/IContentAnalysisRatingInfo.md#max_rating_value)

#### Source

main.ts:165535

***

### name?

> **`optional`** **name**: `string`

rating name
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`name`](../interfaces/IContentAnalysisRatingInfo.md#name)

#### Source

main.ts:165529

***

### rating\_count?

> **`optional`** **rating\_count**: `number`

number of votes

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`rating_count`](../interfaces/IContentAnalysisRatingInfo.md#rating_count)

#### Source

main.ts:165533

***

### rating\_value?

> **`optional`** **rating\_value**: `number`

the value of the rating

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`rating_value`](../interfaces/IContentAnalysisRatingInfo.md#rating_value)

#### Source

main.ts:165531

***

### relative\_rating?

> **`optional`** **relative\_rating**: `number`

relative rating

#### Implementation of

[`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md).[`relative_rating`](../interfaces/IContentAnalysisRatingInfo.md#relative_rating)

#### Source

main.ts:165537

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:165550

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:165571

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Source

main.ts:165564
