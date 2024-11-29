[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTasksReadyResultInfo

# Class: SerpGoogleAutocompleteTasksReadyResultInfo

## Implements

- [`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTasksReadyResultInfo()

> **new SerpGoogleAutocompleteTasksReadyResultInfo**(`data`?): [`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Defined in

main.ts:55557

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:55542

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:55550

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:55553

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:55547

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#id)

#### Defined in

main.ts:55535

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se)

#### Defined in

main.ts:55537

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:55540

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:55544

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:55566

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:55590

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Defined in

main.ts:55583
