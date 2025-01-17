[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopicListDataItemInfo

# Class: TopicListDataItemInfo

Defined in: main.ts:135085

## Implements

- [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TopicListDataItemInfo()

> **new TopicListDataItemInfo**(`data`?): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

Defined in: main.ts:135099

#### Parameters

##### data?

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

## Properties

### topic\_id?

> `optional` **topic\_id**: `string`

Defined in: main.ts:135087

unique topic identifier in Google Trends

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_id`](../interfaces/ITopicListDataItemInfo.md#topic_id)

***

### topic\_title?

> `optional` **topic\_title**: `string`

Defined in: main.ts:135089

title of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_title`](../interfaces/ITopicListDataItemInfo.md#topic_title)

***

### topic\_type?

> `optional` **topic\_type**: `string`

Defined in: main.ts:135092

type of the topic
represents the general type of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_type`](../interfaces/ITopicListDataItemInfo.md#topic_type)

***

### value?

> `optional` **value**: `string`

Defined in: main.ts:135095

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`value`](../interfaces/ITopicListDataItemInfo.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135108

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:135128

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

Defined in: main.ts:135121

#### Parameters

##### data

`any`

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)
