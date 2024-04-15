**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksFixedResultInfo

# Class: SerpGoogleSearchByImageTasksFixedResultInfo

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksFixedResultInfo(data)

> **new SerpGoogleSearchByImageTasksFixedResultInfo**(`data`?): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Source

main.ts:48596

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:48581

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:48589

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:48592

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:48586

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#id)

#### Source

main.ts:48574

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se)

#### Source

main.ts:48576

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)

#### Source

main.ts:48579

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

#### Source

main.ts:48583

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:48605

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:48629

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Source

main.ts:48622
