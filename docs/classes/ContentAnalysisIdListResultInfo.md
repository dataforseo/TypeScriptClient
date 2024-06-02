**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisIdListResultInfo

# Class: ContentAnalysisIdListResultInfo

## Implements

- [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListResultInfo(data)

> **new ContentAnalysisIdListResultInfo**(`data`?): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Source

main.ts:162977

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`cost`](../interfaces/IContentAnalysisIdListResultInfo.md#cost)

#### Source

main.ts:162971

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`datetime_done`](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_done)

#### Source

main.ts:162966

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`datetime_posted`](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_posted)

#### Source

main.ts:162961

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`id`](../interfaces/IContentAnalysisIdListResultInfo.md#id)

#### Source

main.ts:162953

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`metadata`](../interfaces/IContentAnalysisIdListResultInfo.md#metadata)

#### Source

main.ts:162973

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`status`](../interfaces/IContentAnalysisIdListResultInfo.md#status)

#### Source

main.ts:162969

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`url`](../interfaces/IContentAnalysisIdListResultInfo.md#url)

#### Source

main.ts:162956

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:162986

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:163015

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Source

main.ts:163008
