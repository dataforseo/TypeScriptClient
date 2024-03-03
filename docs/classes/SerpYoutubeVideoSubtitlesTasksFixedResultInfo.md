[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTasksFixedResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksFixedResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#id)
- [se](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se)
- [se\_type](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se_type)
- [tag](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTasksFixedResultInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Defined in

main.ts:60175

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:60160

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:60168

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:60171

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:60165

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#id)

#### Defined in

main.ts:60153

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[se](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se)

#### Defined in

main.ts:60155

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_subtitles

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[se_type](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:60158

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[tag](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:60162

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

main.ts:60184

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

main.ts:60208

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Defined in

main.ts:60201
