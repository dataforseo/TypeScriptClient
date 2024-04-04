**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetSearchLiveAdvancedRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

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

#### Source

main.ts:53886

***

### device?

> **`optional`** **device**: `string`

device type
optional field
possible value: desktop

#### Source

main.ts:53872

***

### file\_formats?

> **`optional`** **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Source

main.ts:53894

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Source

main.ts:53902

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;

#### Source

main.ts:53856

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

#### Source

main.ts:53868

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Source

main.ts:53862

***

### last\_updated?

> **`optional`** **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Source

main.ts:53890

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Source

main.ts:53877

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:53912

***

### topics?

> **`optional`** **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Source

main.ts:53906

***

### usage\_rights?

> **`optional`** **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Source

main.ts:53898
