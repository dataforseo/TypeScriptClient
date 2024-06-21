**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksFixedResultInfo

# Class: SerpGoogleMapsTasksFixedResultInfo

## Implements

- [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksFixedResultInfo(data)

> **new SerpGoogleMapsTasksFixedResultInfo**(`data`?): [`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Source

main.ts:40141

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:40126

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:40134

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:40137

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:40131

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#id)

#### Source

main.ts:40119

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se)

#### Source

main.ts:40121

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: maps

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se_type)

#### Source

main.ts:40124

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#tag)

#### Source

main.ts:40128

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:40150

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:40174

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Source

main.ts:40167
