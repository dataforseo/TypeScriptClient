[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedRequestInfo

Defined in: main.ts:59818

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoLiveAdvancedRequestInfo()

> **new SerpGoogleDatasetInfoLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

Defined in: main.ts:59855

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

## Properties

### dataset\_id?

> `optional` **dataset\_id**: `string`

Defined in: main.ts:59824

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#dataset_id)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:59840

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:59836

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:59830

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:59845

device operating system
optional field
possible values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:59851

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59864

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:59886

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

Defined in: main.ts:59879

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)
