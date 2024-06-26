**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTasksReadyResultInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTasksReadyResultInfo(data)

> **new BusinessDataGoogleHotelInfoTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Source

main.ts:205225

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:205215

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:205219

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:205221

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#id)

#### Source

main.ts:205208

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se)

#### Source

main.ts:205211

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se_type)

#### Source

main.ts:205213

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tag)

#### Source

main.ts:205217

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:205234

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:205257

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Source

main.ts:205250
