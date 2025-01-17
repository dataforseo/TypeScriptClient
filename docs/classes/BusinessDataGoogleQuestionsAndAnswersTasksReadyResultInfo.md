[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

Defined in: main.ts:224168

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo()

> **new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

Defined in: main.ts:224186

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:224178

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:224182

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:224171

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:224174

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:224176

search engine type

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:224180

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:224195

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:224217

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

Defined in: main.ts:224210

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)
