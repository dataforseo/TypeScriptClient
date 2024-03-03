[Documentation](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTasksFixedResultInfo

# Class: SerpNaverOrganicTasksFixedResultInfo

## Implements

- [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpNaverOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpNaverOrganicTasksFixedResultInfo.md#id)
- [se](SerpNaverOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpNaverOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpNaverOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpNaverOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpNaverOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpNaverOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTasksFixedResultInfo**(`data?`): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:67963

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:67948

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:67956

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:67959

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:67953

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:67941

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:67943

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:67946

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:67950

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

main.ts:67972

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

main.ts:67996

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:67989
