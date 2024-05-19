**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoLiveAdvancedRequestInfo(data)

> **new SerpGoogleDatasetInfoLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Source

main.ts:56250

## Properties

### dataset\_id?

> **`optional`** **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#dataset_id)

#### Source

main.ts:56219

***

### device?

> **`optional`** **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:56235

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:56231

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:56225

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:56240

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:56246

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:56259

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:56281

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Source

main.ts:56274
