**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo(data)

> **new KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Source

main.ts:115970

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:115962

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:115966

***

### function?

> **`optional`** **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#function)

#### Source

main.ts:115960

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#id)

#### Source

main.ts:115956

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#se)

#### Source

main.ts:115958

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#tag)

#### Source

main.ts:115964

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:115979

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116001

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Source

main.ts:115994
