[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TrendsTopicListDataInfo

# Class: TrendsTopicListDataInfo

## Implements

- [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrendsTopicListDataInfo()

> **new TrendsTopicListDataInfo**(`data`?): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Parameters

• **data?**: [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Defined in

main.ts:124848

## Properties

### rising?

> `optional` **rising**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`rising`](../interfaces/ITrendsTopicListDataInfo.md#rising)

#### Defined in

main.ts:124844

***

### top?

> `optional` **top**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`top`](../interfaces/ITrendsTopicListDataInfo.md#top)

#### Defined in

main.ts:124841

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:124857

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:124883

***

### fromJS()

> `static` **fromJS**(`data`): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Defined in

main.ts:124876
