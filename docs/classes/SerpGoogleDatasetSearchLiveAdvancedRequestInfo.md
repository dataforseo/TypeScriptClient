[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchLiveAdvancedRequestInfo()

> **new SerpGoogleDatasetSearchLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Defined in

main.ts:56254

## Properties

### depth?

> `optional` **depth**: `number`

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

#### Defined in

main.ts:56224

***

### device?

> `optional` **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#device)

#### Defined in

main.ts:56210

***

### file\_formats?

> `optional` **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`file_formats`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#file_formats)

#### Defined in

main.ts:56232

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`is_free`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#is_free)

#### Defined in

main.ts:56240

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#keyword)

#### Defined in

main.ts:56194

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_code)

#### Defined in

main.ts:56206

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_name)

#### Defined in

main.ts:56200

***

### last\_updated?

> `optional` **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`last_updated`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#last_updated)

#### Defined in

main.ts:56228

***

### os?

> `optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#os)

#### Defined in

main.ts:56215

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tag)

#### Defined in

main.ts:56250

***

### topics?

> `optional` **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`topics`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#topics)

#### Defined in

main.ts:56244

***

### usage\_rights?

> `optional` **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`usage_rights`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#usage_rights)

#### Defined in

main.ts:56236

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:56263

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:56299

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Defined in

main.ts:56292
