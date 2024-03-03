[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetSearchTaskPostRequestInfo

# Interface: ISerpGoogleDatasetSearchTaskPostRequestInfo

## Implemented by

- [`SerpGoogleDatasetSearchTaskPostRequestInfo`](../classes/SerpGoogleDatasetSearchTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#depth)
- [device](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#device)
- [file\_formats](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#file_formats)
- [is\_free](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#is_free)
- [keyword](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#keyword)
- [language\_code](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#language_code)
- [language\_name](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#language_name)
- [last\_updated](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#last_updated)
- [os](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#os)
- [pingback\_url](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#pingback_url)
- [postback\_data](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_data)
- [postback\_url](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_url)
- [priority](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#priority)
- [tag](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#tag)
- [topics](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#topics)
- [usage\_rights](ISerpGoogleDatasetSearchTaskPostRequestInfo.md#usage_rights)

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

main.ts:50098

___

### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Defined in

main.ts:50113

___

### file\_formats

• `Optional` **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Defined in

main.ts:50126

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Defined in

main.ts:50134

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”.

#### Defined in

main.ts:50081

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
possible value:
en

#### Defined in

main.ts:50109

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Defined in

main.ts:50104

___

### last\_updated

• `Optional` **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Defined in

main.ts:50122

___

### os

• `Optional` **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Defined in

main.ts:50118

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:50169

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
only value: advanced

#### Defined in

main.ts:50159

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:50154

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Defined in

main.ts:50089

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:50144

___

### topics

• `Optional` **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Defined in

main.ts:50138

___

### usage\_rights

• `Optional` **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Defined in

main.ts:50130
