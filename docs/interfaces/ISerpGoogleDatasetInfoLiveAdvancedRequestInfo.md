**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### dataset\_id?

> **`optional`** **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Source

main.ts:56614

***

### device?

> **`optional`** **device**: `string`

device type
optional field
possible value: desktop

#### Source

main.ts:56630

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Source

main.ts:56626

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Source

main.ts:56620

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Source

main.ts:56635

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:56641
