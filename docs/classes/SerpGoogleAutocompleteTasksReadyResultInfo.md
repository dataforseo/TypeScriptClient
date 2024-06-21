**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTasksReadyResultInfo

# Class: SerpGoogleAutocompleteTasksReadyResultInfo

## Implements

- [`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTasksReadyResultInfo(data)

> **new SerpGoogleAutocompleteTasksReadyResultInfo**(`data`?): [`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Source

main.ts:52271

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:52256

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:52264

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:52267

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:52261

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#id)

#### Source

main.ts:52249

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se)

#### Source

main.ts:52251

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se_type)

#### Source

main.ts:52254

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#tag)

#### Source

main.ts:52258

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:52280

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:52304

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Source

main.ts:52297
