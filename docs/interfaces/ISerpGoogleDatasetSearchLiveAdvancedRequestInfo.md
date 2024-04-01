[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetSearchLiveAdvancedRequestInfo

## Implemented by

- [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../classes/SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#depth)
- [device](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#device)
- [file\_formats](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#file_formats)
- [is\_free](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#is_free)
- [keyword](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#keyword)
- [language\_code](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_code)
- [language\_name](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_name)
- [last\_updated](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#last_updated)
- [os](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#os)
- [tag](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tag)
- [topics](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#topics)
- [usage\_rights](ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#usage_rights)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

main.ts:53878

___

### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Defined in

main.ts:53864

___

### file\_formats

• `Optional` **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Defined in

main.ts:53886

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Defined in

main.ts:53894

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;

#### Defined in

main.ts:53848

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

#### Defined in

main.ts:53860

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Defined in

main.ts:53854

___

### last\_updated

• `Optional` **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Defined in

main.ts:53882

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

main.ts:53869

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:53904

___

### topics

• `Optional` **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Defined in

main.ts:53898

___

### usage\_rights

• `Optional` **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Defined in

main.ts:53890
