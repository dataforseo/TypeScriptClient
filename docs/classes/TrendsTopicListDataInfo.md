[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / TrendsTopicListDataInfo

# Class: TrendsTopicListDataInfo

## Implements

- [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TrendsTopicListDataInfo.md#constructor)

### Properties

- [rising](TrendsTopicListDataInfo.md#rising)
- [top](TrendsTopicListDataInfo.md#top)

### Methods

- [init](TrendsTopicListDataInfo.md#init)
- [toJSON](TrendsTopicListDataInfo.md#tojson)
- [fromJS](TrendsTopicListDataInfo.md#fromjs)

## Constructors

### constructor

• **new TrendsTopicListDataInfo**(`data?`): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md) |

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Defined in

[main.ts:120845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120845)

## Properties

### rising

• `Optional` **rising**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[ITrendsTopicListDataInfo](../interfaces/ITrendsTopicListDataInfo.md).[rising](../interfaces/ITrendsTopicListDataInfo.md#rising)

#### Defined in

[main.ts:120841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120841)

___


### top

• `Optional` **top**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[ITrendsTopicListDataInfo](../interfaces/ITrendsTopicListDataInfo.md).[top](../interfaces/ITrendsTopicListDataInfo.md#top)

#### Defined in

[main.ts:120838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120838)

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

[main.ts:120854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120854)

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

[main.ts:120880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120880)

___


### fromJS

▸ **fromJS**(`data`): [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

#### Defined in

[main.ts:120873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120873)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")