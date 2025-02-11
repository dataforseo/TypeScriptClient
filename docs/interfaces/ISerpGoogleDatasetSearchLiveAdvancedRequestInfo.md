[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetSearchLiveAdvancedRequestInfo

Defined in: main.ts:58517

## Indexable

\[`key`: `string`\]: `any`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:58555

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:58541

device type
optional field
possible value: desktop

***

### file\_formats?

> `optional` **file\_formats**: `string`[]

Defined in: main.ts:58563

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:58571

indicates whether displayed datasets are free
optional field
possible values: true, false

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:58525

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58537

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:58531

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

***

### last\_updated?

> `optional` **last\_updated**: `string`

Defined in: main.ts:58559

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:58546

device operating system
optional field
choose from the following values: windows, macos
default value: windows

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:58581

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### topics?

> `optional` **topics**: `string`[]

Defined in: main.ts:58575

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

***

### usage\_rights?

> `optional` **usage\_rights**: `string`

Defined in: main.ts:58567

usage rights of the dataset
optional field
possible values: commercial, noncommercial
