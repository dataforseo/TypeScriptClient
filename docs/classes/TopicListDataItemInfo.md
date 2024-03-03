[Documentation](../README.md) / [Exports](../modules.md) / TopicListDataItemInfo

# Class: TopicListDataItemInfo

## Implements

- [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopicListDataItemInfo.md#constructor)

### Properties

- [topic\_id](TopicListDataItemInfo.md#topic_id)
- [topic\_title](TopicListDataItemInfo.md#topic_title)
- [topic\_type](TopicListDataItemInfo.md#topic_type)
- [value](TopicListDataItemInfo.md#value)

### Methods

- [init](TopicListDataItemInfo.md#init)
- [toJSON](TopicListDataItemInfo.md#tojson)
- [fromJS](TopicListDataItemInfo.md#fromjs)

## Constructors

### constructor

• **new TopicListDataItemInfo**(`data?`): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md) |

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Defined in

main.ts:120921

## Properties

### topic\_id

• `Optional` **topic\_id**: `string`

unique topic identifier in Google Trends

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[topic_id](../interfaces/ITopicListDataItemInfo.md#topic_id)

#### Defined in

main.ts:120909

___

### topic\_title

• `Optional` **topic\_title**: `string`

title of the topic

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[topic_title](../interfaces/ITopicListDataItemInfo.md#topic_title)

#### Defined in

main.ts:120911

___

### topic\_type

• `Optional` **topic\_type**: `string`

type of the topic
represents the general type of the topic

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[topic_type](../interfaces/ITopicListDataItemInfo.md#topic_type)

#### Defined in

main.ts:120914

___

### value

• `Optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[value](../interfaces/ITopicListDataItemInfo.md#value)

#### Defined in

main.ts:120917

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:120930

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:120950

___

### fromJS

▸ **fromJS**(`data`): [`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopicListDataItemInfo`](TopicListDataItemInfo.md)

#### Defined in

main.ts:120943
