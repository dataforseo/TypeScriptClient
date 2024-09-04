[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo()

> **new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Defined in

main.ts:213842

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:213834

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:213838

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#id)

#### Defined in

main.ts:213827

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se)

#### Defined in

main.ts:213830

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:213832

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:213836

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:213851

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:213873

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Defined in

main.ts:213866
