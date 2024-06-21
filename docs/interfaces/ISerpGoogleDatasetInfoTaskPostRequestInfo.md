**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoTaskPostRequestInfo

# Interface: ISerpGoogleDatasetInfoTaskPostRequestInfo

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

main.ts:55685

***

### device?

> **`optional`** **device**: `string`

device type
optional field
possible value: desktop

#### Source

main.ts:55709

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Source

main.ts:55705

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Source

main.ts:55699

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Source

main.ts:55714

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Source

main.ts:55745

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value: advanced

#### Source

main.ts:55735

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Source

main.ts:55730

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Source

main.ts:55693

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:55720
