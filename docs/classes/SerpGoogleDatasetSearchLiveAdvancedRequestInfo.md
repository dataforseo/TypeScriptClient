[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedRequestInfo

Defined in: main.ts:58374

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchLiveAdvancedRequestInfo()

> **new SerpGoogleDatasetSearchLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

Defined in: main.ts:58442

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:58412

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

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:58398

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#device)

***

### file\_formats?

> `optional` **file\_formats**: `string`[]

Defined in: main.ts:58420

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`file_formats`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#file_formats)

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:58428

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`is_free`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#is_free)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:58382

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58394

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:58388

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_name)

***

### last\_updated?

> `optional` **last\_updated**: `string`

Defined in: main.ts:58416

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`last_updated`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#last_updated)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:58403

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:58438

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tag)

***

### topics?

> `optional` **topics**: `string`[]

Defined in: main.ts:58432

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`topics`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#topics)

***

### usage\_rights?

> `optional` **usage\_rights**: `string`

Defined in: main.ts:58424

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[`usage_rights`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#usage_rights)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:58451

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:58487

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

Defined in: main.ts:58480

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)
