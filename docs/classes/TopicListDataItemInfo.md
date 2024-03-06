[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / TopicListDataItemInfo

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

[main.ts:120777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120777)

## Properties

### topic\_id

• `Optional` **topic\_id**: `string`

unique topic identifier in Google Trends

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[topic_id](../interfaces/ITopicListDataItemInfo.md#topic_id)

#### Defined in

[main.ts:120765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120765)

___


### topic\_title

• `Optional` **topic\_title**: `string`

title of the topic

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[topic_title](../interfaces/ITopicListDataItemInfo.md#topic_title)

#### Defined in

[main.ts:120767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120767)

___


### topic\_type

• `Optional` **topic\_type**: `string`

type of the topic
represents the general type of the topic

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[topic_type](../interfaces/ITopicListDataItemInfo.md#topic_type)

#### Defined in

[main.ts:120770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120770)

___


### value

• `Optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[ITopicListDataItemInfo](../interfaces/ITopicListDataItemInfo.md).[value](../interfaces/ITopicListDataItemInfo.md#value)

#### Defined in

[main.ts:120773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120773)

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

[main.ts:120786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120786)

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

[main.ts:120806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120806)

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

[main.ts:120799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120799)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")