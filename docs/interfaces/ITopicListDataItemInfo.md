[Documentation](../README.md) / [Exports](../modules.md) / ITopicListDataItemInfo

# Interface: ITopicListDataItemInfo

## Implemented by

- [`TopicListDataItemInfo`](../classes/TopicListDataItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [topic\_id](ITopicListDataItemInfo.md#topic_id)
- [topic\_title](ITopicListDataItemInfo.md#topic_title)
- [topic\_type](ITopicListDataItemInfo.md#topic_type)
- [value](ITopicListDataItemInfo.md#value)

## Properties

### topic\_id

• `Optional` **topic\_id**: `string`

unique topic identifier in Google Trends

#### Defined in

main.ts:124078

___

### topic\_title

• `Optional` **topic\_title**: `string`

title of the topic

#### Defined in

main.ts:124080

___

### topic\_type

• `Optional` **topic\_type**: `string`

type of the topic
represents the general type of the topic

#### Defined in

main.ts:124083

___

### value

• `Optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Defined in

main.ts:124086
