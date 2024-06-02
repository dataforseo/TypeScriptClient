**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo(data)

> **new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Source

main.ts:198648

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:198640

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:198644

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#id)

#### Source

main.ts:198633

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se)

#### Source

main.ts:198636

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se_type)

#### Source

main.ts:198638

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tag)

#### Source

main.ts:198642

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:198657

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:198679

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Source

main.ts:198672
