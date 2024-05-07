**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchLiveAdvancedRequestInfo(data)

> **new SerpGoogleDatasetSearchLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Source

main.ts:54774

## Properties

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#depth)

#### Source

main.ts:54744

***

### device?

> **`optional`** **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:54730

***

### file\_formats?

> **`optional`** **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`file_formats`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#file_formats)

#### Source

main.ts:54752

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`is_free`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#is_free)

#### Source

main.ts:54760

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#keyword)

#### Source

main.ts:54714

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:54726

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:54720

***

### last\_updated?

> **`optional`** **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`last_updated`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#last_updated)

#### Source

main.ts:54748

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:54735

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:54770

***

### topics?

> **`optional`** **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`topics`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#topics)

#### Source

main.ts:54764

***

### usage\_rights?

> **`optional`** **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`usage_rights`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#usage_rights)

#### Source

main.ts:54756

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:54783

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:54819

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Source

main.ts:54812
