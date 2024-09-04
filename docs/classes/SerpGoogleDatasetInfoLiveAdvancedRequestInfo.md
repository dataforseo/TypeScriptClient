[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoLiveAdvancedRequestInfo()

> **new SerpGoogleDatasetInfoLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Defined in

main.ts:57650

## Properties

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#dataset_id)

#### Defined in

main.ts:57619

***

### device?

> `optional` **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#device)

#### Defined in

main.ts:57635

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_code)

#### Defined in

main.ts:57631

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_name)

#### Defined in

main.ts:57625

***

### os?

> `optional` **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#os)

#### Defined in

main.ts:57640

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tag)

#### Defined in

main.ts:57646

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:57659

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:57681

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Defined in

main.ts:57674
