[**Documentation**](../README.md)

***

[Documentation](../README.md) / TrendsTopicListDataInfo

# Class: TrendsTopicListDataInfo

Defined in: main.ts:135157

## Implements

- [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TrendsTopicListDataInfo()

> **new TrendsTopicListDataInfo**(`data`?): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

Defined in: main.ts:135167

#### Parameters

##### data?

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

## Properties

### rising?

> `optional` **rising**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

Defined in: main.ts:135163

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`rising`](../interfaces/ITrendsTopicListDataInfo.md#rising)

***

### top?

> `optional` **top**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

Defined in: main.ts:135160

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`top`](../interfaces/ITrendsTopicListDataInfo.md#top)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135176

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:135202

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

Defined in: main.ts:135195

#### Parameters

##### data

`any`

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)
