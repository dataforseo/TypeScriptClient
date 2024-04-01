[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTasksFixedResultInfo

# Class: SerpYoutubeVideoInfoTasksFixedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpYoutubeVideoInfoTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpYoutubeVideoInfoTasksFixedResultInfo.md#id)
- [se](SerpYoutubeVideoInfoTasksFixedResultInfo.md#se)
- [se\_type](SerpYoutubeVideoInfoTasksFixedResultInfo.md#se_type)
- [tag](SerpYoutubeVideoInfoTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpYoutubeVideoInfoTasksFixedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTasksFixedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTasksFixedResultInfo**(`data?`): [`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Defined in

main.ts:60682

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:60667

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:60675

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:60678

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:60672

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[id](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#id)

#### Defined in

main.ts:60660

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[se](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se)

#### Defined in

main.ts:60662

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_info

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[se_type](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:60665

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[tag](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:60669

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

main.ts:60691

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

main.ts:60715

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Defined in

main.ts:60708
