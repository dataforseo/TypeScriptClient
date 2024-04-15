**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTasksReadyResultInfo

# Class: AppDataGoogleAppSearchesTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTasksReadyResultInfo(data)

> **new AppDataGoogleAppSearchesTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Source

main.ts:183221

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:183210

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Searches task

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:183214

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Google App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:183217

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#id)

#### Source

main.ts:183206

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#se)

#### Source

main.ts:183208

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#tag)

#### Source

main.ts:183212

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:183230

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:183252

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Source

main.ts:183245
