[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Defined in

main.ts:59892

***

### device?

> `optional` **device**: `string`

device type
optional field
possible value: desktop

#### Defined in

main.ts:59908

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Defined in

main.ts:59904

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Defined in

main.ts:59898

***

### os?

> `optional` **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Defined in

main.ts:59913

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:59919
