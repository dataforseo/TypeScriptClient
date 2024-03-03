[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTasksFixedResultInfo

# Class: SerpGoogleImagesTasksFixedResultInfo

## Implements

- [`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleImagesTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleImagesTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleImagesTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleImagesTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleImagesTasksFixedResultInfo.md#id)
- [se](SerpGoogleImagesTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleImagesTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleImagesTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleImagesTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleImagesTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTasksFixedResultInfo**(`data?`): [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Defined in

main.ts:46049

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:46034

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:46042

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:46045

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:46039

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#id)

#### Defined in

main.ts:46027

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#se)

#### Defined in

main.ts:46029

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: images

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:46032

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleImagesTasksFixedResultInfo](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:46036

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

main.ts:46058

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

main.ts:46082

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Defined in

main.ts:46075
