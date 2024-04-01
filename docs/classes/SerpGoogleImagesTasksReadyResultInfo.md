[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTasksReadyResultInfo

# Class: SerpGoogleImagesTasksReadyResultInfo

## Implements

- [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleImagesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleImagesTasksReadyResultInfo.md#id)
- [se](SerpGoogleImagesTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleImagesTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleImagesTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleImagesTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleImagesTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTasksReadyResultInfo**(`data?`): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Defined in

main.ts:46446

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:46431

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:46439

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:46442

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:46436

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:46424

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:46426

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: images

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:46429

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleImagesTasksReadyResultInfo](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:46433

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

main.ts:46455

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

main.ts:46479

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Defined in

main.ts:46472
