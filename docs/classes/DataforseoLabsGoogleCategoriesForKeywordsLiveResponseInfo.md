[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo()

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:88384

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:88380

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:88388

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:88410

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:88403
