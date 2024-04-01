[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoTaskPostRequestInfo

# Interface: ISerpGoogleDatasetInfoTaskPostRequestInfo

## Implemented by

- [`SerpGoogleDatasetInfoTaskPostRequestInfo`](../classes/SerpGoogleDatasetInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [dataset\_id](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#dataset_id)
- [device](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#device)
- [language\_code](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#language_code)
- [language\_name](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#language_name)
- [os](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#os)
- [pingback\_url](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#postback_url)
- [priority](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#priority)
- [tag](ISerpGoogleDatasetInfoTaskPostRequestInfo.md#tag)

## Properties

### dataset\_id

• `Optional` **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Defined in

main.ts:54286

___

### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Defined in

main.ts:54310

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Defined in

main.ts:54306

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Defined in

main.ts:54300

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

main.ts:54315

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

main.ts:54346

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value: advanced

#### Defined in

main.ts:54336

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

main.ts:54331

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

main.ts:54294

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:54321
