[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoTaskPostRequestInfo

# Interface: ISerpGoogleDatasetInfoTaskPostRequestInfo

Defined in: main.ts:58965

## Indexable

\[`key`: `string`\]: `any`

## Properties

### dataset\_id?

> `optional` **dataset\_id**: `string`

Defined in: main.ts:58971

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:58995

device type
optional field
possible value: desktop

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58991

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:58985

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:59000

device operating system
optional field
choose from the following values: windows, macos
default value: windows

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:59033

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:59022

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value: advanced

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:59017

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:58979

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:59006

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
