**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TrendsTopicListDataInfo

# Class: TrendsTopicListDataInfo

## Implements

- [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrendsTopicListDataInfo(data)

> **new TrendsTopicListDataInfo**(`data`?): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Parameters

• **data?**: [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Source

main.ts:125253

## Properties

### rising?

> **`optional`** **rising**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`rising`](../interfaces/ITrendsTopicListDataInfo.md#rising)

#### Source

main.ts:125249

***

### top?

> **`optional`** **top**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`top`](../interfaces/ITrendsTopicListDataInfo.md#top)

#### Source

main.ts:125246

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:125262

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:125288

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Source

main.ts:125281
