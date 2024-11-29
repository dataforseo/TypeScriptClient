[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo()

> **new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Defined in

main.ts:224118

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:224110

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:224114

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#id)

#### Defined in

main.ts:224103

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se)

#### Defined in

main.ts:224106

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:224108

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:224112

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:224127

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:224149

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Defined in

main.ts:224142
