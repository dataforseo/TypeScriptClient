[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopicListDataItemInfo

# Class: TopicListDataItemInfo

## Implements

- [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopicListDataItemInfo()

> **new TopicListDataItemInfo**(`data`?): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Parameters

• **data?**: [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Defined in

main.ts:127779

## Properties

### topic\_id?

> `optional` **topic\_id**: `string`

unique topic identifier in Google Trends

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_id`](../interfaces/ITopicListDataItemInfo.md#topic_id)

#### Defined in

main.ts:127767

***

### topic\_title?

> `optional` **topic\_title**: `string`

title of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_title`](../interfaces/ITopicListDataItemInfo.md#topic_title)

#### Defined in

main.ts:127769

***

### topic\_type?

> `optional` **topic\_type**: `string`

type of the topic
represents the general type of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_type`](../interfaces/ITopicListDataItemInfo.md#topic_type)

#### Defined in

main.ts:127772

***

### value?

> `optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`value`](../interfaces/ITopicListDataItemInfo.md#value)

#### Defined in

main.ts:127775

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:127788

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:127808

***

### fromJS()

> `static` **fromJS**(`data`): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Defined in

main.ts:127801
