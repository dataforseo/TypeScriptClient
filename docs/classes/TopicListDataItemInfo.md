**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopicListDataItemInfo

# Class: TopicListDataItemInfo

## Implements

- [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopicListDataItemInfo(data)

> **new TopicListDataItemInfo**(`data`?): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Parameters

• **data?**: [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Source

main.ts:127955

## Properties

### topic\_id?

> **`optional`** **topic\_id**: `string`

unique topic identifier in Google Trends

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_id`](../interfaces/ITopicListDataItemInfo.md#topic_id)

#### Source

main.ts:127943

***

### topic\_title?

> **`optional`** **topic\_title**: `string`

title of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_title`](../interfaces/ITopicListDataItemInfo.md#topic_title)

#### Source

main.ts:127945

***

### topic\_type?

> **`optional`** **topic\_type**: `string`

type of the topic
represents the general type of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_type`](../interfaces/ITopicListDataItemInfo.md#topic_type)

#### Source

main.ts:127948

***

### value?

> **`optional`** **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`value`](../interfaces/ITopicListDataItemInfo.md#value)

#### Source

main.ts:127951

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127964

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127984

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Source

main.ts:127977
