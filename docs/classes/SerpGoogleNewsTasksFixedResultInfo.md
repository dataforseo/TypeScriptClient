**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksFixedResultInfo

# Class: SerpGoogleNewsTasksFixedResultInfo

## Implements

- [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksFixedResultInfo(data)

> **new SerpGoogleNewsTasksFixedResultInfo**(`data`?): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Source

main.ts:44523

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:44508

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:44516

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:44519

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:44513

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#id)

#### Source

main.ts:44501

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se)

#### Source

main.ts:44503

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: news

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se_type)

#### Source

main.ts:44506

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#tag)

#### Source

main.ts:44510

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:44532

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:44556

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Source

main.ts:44549
